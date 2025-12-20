import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get the Slack Webhook URL from environment variables
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      console.error("SLACK_WEBHOOK_URL is not defined in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Construct the Slack message payload using Slack's "Block Kit" for better formatting
    const slackMessage = {
      text: `New Portfolio Contact from ${name}`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "📬 New Portfolio Contact Form Submission",
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${name}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`,
            },
          ],
        },
        ...(subject
          ? [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*Subject:*\n${subject}`,
                },
              },
            ]
          : []),
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n\`\`\`${message}\`\`\``,
          },
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Received at: ${new Date().toLocaleString()}`,
            },
          ],
        },
      ],
    };

    // Send the message to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    // Check if the message was sent successfully
    if (!slackResponse.ok) {
      const responseText = await slackResponse.text();
      console.error("Failed to send message to Slack:", responseText);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    // Return a success response to the client
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}


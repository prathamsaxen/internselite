import os
import sys

from dotenv import load_dotenv
from openai import APIStatusError, OpenAI

load_dotenv()

# Free router: OpenRouter picks an available free model for each request.
# Free models have rate limits, and which model answers can change.
MODEL = "openrouter/free"


def ask(prompt: str) -> str:
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        raise SystemExit(
            "Missing OPENROUTER_API_KEY. Add it to your .env file."
        )

    client = OpenAI(
        api_key=api_key,
        base_url="https://openrouter.ai/api/v1",
    )
    try:
        completion = client.chat.completions.create(
            model=MODEL,
            messages=[{"role": "user", "content": prompt}],
        )
    except APIStatusError as error:
        raise SystemExit(f"API request failed: {error.message}") from None

    return completion.choices[0].message.content or ""


if __name__ == "__main__":
    prompt = " ".join(sys.argv[1:]).strip() or "Say hello in one sentence."
    print("Prompt:", prompt)
    print("Response:", ask(prompt))

import { StarIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings } from "./settings-dialog";

interface Props {
  settings: Settings;
}

export function Github({ settings }: Props) {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>STYLOCODE</CardTitle>
          <CardDescription>Convert any design to code</CardDescription>
        </div>
        <div className="rounded-md">
          <Button
            variant="default"
            className="shadow-none"
            onClick={() => {
              window.open(
                "https://github.com/PRASHANTH-S-23/STYLOCODE",
                "_blank"
              );
            }}
          >
            <StarIcon className="mr-2 h-4" />
            Star Repo
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {!settings.openAiApiKey ? (
          <div className="flex space-x-4 text-sm text-muted-foreground">
            Add OpenAI API key.
          </div>
        ) : (
          <div className="flex space-x-4 text-sm text-muted-foreground">
            Upload a design image to get started.
          </div>
        )}
        <div className="mt-2 grid w-full">
          <Button
            variant="default"
            className="shadow-none"
            onClick={() => {
              window.open(
                "",
                "_blank"
              );
            }}
          >
            Contact Us
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

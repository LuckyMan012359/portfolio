"use client";

import { type ReactNode } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { EMAIL, GITHUB_URL, LINKED_IN_URL } from "@/data/personal";
import { Separator } from "../ui/separator";
import Muted from "../typography/muted";
import { toast } from "sonner";

export default function ContactButton({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            You can contact me in multiple ways
          </DialogDescription>
        </DialogHeader>

        {/* Dialog body */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <div>
              <Divider>Email</Divider>
              <div className="flex gap-2">
                <Input value={EMAIL} readOnly={true} />
                <Button
                  className="flex gap-2"
                  onClick={() => {
                    navigator.clipboard.writeText(EMAIL);
                    toast("Success!", {
                      description: "Email has been copied.",
                    });
                  }}
                >
                  <FaEnvelope /> Copy Email
                </Button>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <Divider>Social</Divider>
            <div className="flex  gap-2">
              <Button asChild className="flex w-full gap-2" variant={"outline"}>
                <a href={GITHUB_URL} target="_blank">
                  <FaGithub className="size-5" /> Github
                </a>
              </Button>
              <Button asChild className="flex w-full gap-2" variant={"outline"}>
                <a href={LINKED_IN_URL} target="_blank">
                  <FaLinkedin className="size-5" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 mt-2 flex items-center justify-center gap-2">
      <Separator className="w-full shrink" />
      <Muted>{children}</Muted>
      <Separator className="w-full shrink" />
    </div>
  );
}

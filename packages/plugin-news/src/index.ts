import { Plugin } from "@elizaos/core";
import { currentNewsAction } from "./actions/news.ts";

export * as actions from "./actions";

export const newsPlugin: Plugin = {
    name: "news",
    description:
        "Get the latest news about a specific topic if asked by the user.",
    actions: [currentNewsAction],
};

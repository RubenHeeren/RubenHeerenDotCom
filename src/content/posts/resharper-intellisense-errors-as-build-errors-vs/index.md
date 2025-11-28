---
title: "ReSharper errors as build errors in Visual Studio"
date: 2025-11-27
tags: ["ReSharper", "Dev Environment"]
description: "In this post you'll learn how to make ReSharper errors show as build errors and fail a build in Visual Studio."
postSlug: "resharper-intellisense-errors-as-build-errors-vs"
---

This tutorial was written for ReSharper version x and Visual Studio 2022 version y. I expect it to work without issues on Visual Studio 2026 as well.

# Yep so this is a test.

<!-- ![Intro Slide](./slide-1.png)
So welcome everyone. Thank you for joining us here today. Today I'm gonna talk to you about how to st if you wanna start a new hobby, how you could do that. -->

This is an example C# file.

```csharp showlinenumbers
using System;

namespace MarkdownCodeExample
{
    // Simple class to demonstrate basic C# features
    public class Person
    {
        public string FirstName { get; }
        public string LastName { get; }
        public int Age { get; private set; }

        public Person(string firstName, string lastName, int age)
        {
            if (string.IsNullOrWhiteSpace(firstName))
                throw new ArgumentException("First name is required.", nameof(firstName));

            if (string.IsNullOrWhiteSpace(lastName))
                throw new ArgumentException("Last name is required.", nameof(lastName));

            if (age < 0)
                throw new ArgumentOutOfRangeException(nameof(age), "Age cannot be negative.");

            FirstName = firstName;
            LastName = lastName;
            Age = age;
        }

        public void HaveBirthday()
        {
            Age++;
            Console.WriteLine($"Happy birthday, {FirstName}! You are now {Age}.");
        }

        public override string ToString()
        {
            return $"{FirstName} {LastName}, Age {Age}";
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var person = new Person("Ada", "Lovelace", 36);

            Console.WriteLine("Person info:");
            Console.WriteLine(person);

            person.HaveBirthday();

            Console.WriteLine("Updated person info:");
            Console.WriteLine(person);

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
```

And this is a JavaScript file!

```js showlinenumbers
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import { readFileSync } from "fs";
import expressiveCode, { ExpressiveCodeTheme } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

const jsoncString = readFileSync(
  new URL(`./src/config/vscode-theme.jsonc`, import.meta.url),
  "utf-8"
);
const vscodeTheme = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
  site: "https://rubenheeren.com",

  // replace this with your deployed domain
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    expressiveCode({
      plugins: [pluginLineNumbers()],
      defaultProps: {
        wrap: true,
        showLineNumbers: false,
      },
      styleOverrides: {
        codeFontFamily: "var(--font-monospace)",
        codeFontSize: "0.78125rem",
        codeLineHeight: "1.6",
        uiFontSize: "0.78125rem",

        lineNumbers: {
          highlightForeground: "#85c7ebb3",
        },
      },
      themes: [vscodeTheme],
    }),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    rehypePlugins: [rehypeSlug],
    extendDefaultPlugins: true,
  },

  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  scopedStyleStrategy: "where",
  adapter: netlify(),
});
```

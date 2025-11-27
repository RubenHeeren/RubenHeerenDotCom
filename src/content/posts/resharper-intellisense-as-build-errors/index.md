---
title: "ReSharper errors as build errors in Visual Studio"
date: 2025-11-27
tags: ["ReSharper", "Dev Environment"]
description: "In this post you'll learn how to make ReSharper errors show as build errors and fail a build in Visual Studio."
---

This tutorial was written for ReSharper version x and Visual Studio 2022 version y. I expect it to work without issues on Visual Studio 2026 as well.

# Yep so this is a test.

And what if I add just some plain text? And if I add more content?

<!-- ![Intro Slide](./slide-1.png)
So welcome everyone. Thank you for joining us here today. Today I'm gonna talk to you about how to st if you wanna start a new hobby, how you could do that. -->

```csharp
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

# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` listener.  Improperly handling the unsubscribe function can lead to memory leaks and unpredictable behavior in your application.

## Problem

The `onAuthStateChanged` listener is not automatically unsubscribed. If not handled correctly, when the component unmounts, the listener continues to run in the background. This can lead to memory leaks, particularly if your application is complex or involves frequent authentication changes.

## Solution

The solution involves using a cleanup function within the `useEffect` hook to unsubscribe from the listener when the component unmounts.  The provided code implements this best practice.

## How to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Observe the behavior as you navigate between pages that involve authentication.
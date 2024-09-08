/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/wer` | `/(tabs)` | `/(tabs)/books` | `/(tabs)/community` | `/(tabs)/home` | `/(tabs)/settings` | `/_sitemap` | `/books` | `/community` | `/home` | `/settings` | `/sign-in` | `/sign-up` | `/wer`;
      DynamicRoutes: `/books/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/books/[book]`;
    }
  }
}

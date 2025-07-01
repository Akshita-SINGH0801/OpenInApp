
# open-in-app-akshita

open-in-app-akshita is a lightweight React component that enables seamless deep linking to your mobile app. If the app is not installed, the component smartly redirects users to the Play Store (Android) or App Store (iOS).

---

## Installation

Install via npm:

```bash
npm install open-in-app-akshita
```

---

## Usage

Import and use the component in your React app:

```jsx
import OpenInApp from "open-in-app-akshita";

function App() {
  return (
    <div>
      <h1>Welcome to My Website</h1>

      <OpenInApp
        deepLink="myapp://home"
        fallbackPlayStore="https://play.google.com/store/apps/details?id=com.myapp"
        fallbackAppStore="https://apps.apple.com/app/id1234567890"
        delay={2000}
        autoRedirect={false}
        buttonText="Open Our App"
      />
    </div>
  );
}
```

---

## Props

| Prop                | Type      | Required | Default       | Description                                                        |
|---------------------|-----------|----------|---------------|--------------------------------------------------------------------|
| `deepLink`          | string    | Yes      | -             | The custom scheme or deep link URL for your mobile app             |
| `fallbackPlayStore` | string    | Yes      | -             | URL to your app's Play Store page for Android devices              |
| `fallbackAppStore`  | string    | Yes      | -             | URL to your app's App Store page for iOS devices                   |
| `delay`             | number    | No       | 2000          | Time (in milliseconds) to wait before fallback is triggered        |
| `autoRedirect`      | boolean   | No       | false         | If true, redirects automatically without user interaction          |
| `buttonText`        | string    | No       | "Open in App" | The text displayed on the clickable button                         |

---

## Use Case

Perfect for:
- Landing pages promoting your app
- Product pages where you want users to open the app directly
- Smart fallback behavior when the app isn’t installed

---

## Compatibility

- React 17 and 18+
- Android and iOS devices

---

## License

MIT

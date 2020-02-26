import React from "react"
import { addParameters, addDecorator } from "@storybook/react"
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks"

addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "grey", value: "#edf0f0" },
  ],
  options: {
    // sort stories alphabetically
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

addDecorator(story => <div style={{ padding: 12 }}>{story()}</div>)

import type { UIStyle } from "@yamada-ui/react"
import { UIProvider, extendTheme, Center, Image } from "@yamada-ui/react"
import type { FC } from "react"

export default {
  title: "System / Theme / Global Style",
}

export const customGlobalStyle = () => {
  const globalStyle: UIStyle = {
    /**
     * Define the style you want to customize
     */
  }
  const theme = extendTheme({ styles: { globalStyle } })()

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Image
        w="full"
        maxW="xl"
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
      />
    </Center>
  )
}

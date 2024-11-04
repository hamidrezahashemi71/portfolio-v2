import localFont from 'next/font/local'

export const dana = localFont({
  src: [{
    path: '../public/fonts/fa_IR/YekanBakh-Regular.ttf',
    weight: '500',
    style: "bold"
  }],
  variable: '--font-dana'
})

export const jet = localFont({
  src: [
    {
      path: '../public/fonts/en_US/JetBrainsMono-Light.ttf',
      weight: '300',
      style: "light"
    },
    {
      path: '../public/fonts/en_US/JetBrainsMono-Medium.ttf',
      weight: '400',
      style: "medium"
    },
    {
      path: '../public/fonts/en_US/JetBrainsMono-Bold.ttf',
      weight: '500',
      style: "bold"
    },
    {
      path: '../public/fonts/en_US/JetBrainsMono-ExtraBold.ttf',
      weight: '900',
      style: "extrabold"
    },
  ],
  variable: '--font-jet'
})

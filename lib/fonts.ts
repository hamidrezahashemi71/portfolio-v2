import localFont from 'next/font/local'

export const dana = localFont({
  src: [{
    path: '../../../public/fonts/fa_IR/dana_fa.ttf',
    weight: '500',
    style: "bold"
  }],
  variable: '--font-dana'
})

export const jet = localFont({
  src: [{
    path: '../../../public/fonts/en_US/JetBrainsMono-Bold.ttf',
    weight: '500',
    style: "bold"
  }],
  variable: '--font-jet'
})

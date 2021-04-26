export const tickerStyles = ticker => {
  switch (ticker.length) {
    case 4:
      return {
        fontSize: "48px",
        y: 18,
      }
    case 3:
      return {
        fontSize: "56px",
        y: 24,
      }
    case 2:
      return {
        fontSize: "64px",
        y: 26,
      }
    default:
      return {
        fontSize: "72px",
        y: 32,
      }
  }
}

export const averageStyles = average => {
  switch (average.length) {
    case 7:
      return {
        fontSize: "30px",
      }
    case 6:
      return {
        fontSize: "32px",
        y: 34,
      }
    case 5:
      return {
        fontSize: "34px",
        y: 36,
      }
    default:
      return {
        fontSize: "38px",
        y: 26,
      }
  }
}

export const inputStyles = {
  variant: "flushed",
  _placeholder: {
    color: "gray.300",
  },
  maxW: "12ch",
}

export const inputFieldStyles = {
  align: "center",
  justify: "center",
}

export const headingStyles = {
  fontSize: "xl",
  fontWeight: 600,
  pr: "0.5rem",
}

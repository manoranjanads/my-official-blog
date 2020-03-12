/** @jsx jsx */
import {
  Footer as ThemeFooter,
  Styled,
  Flex,
  useColorMode,
  jsx
} from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <ThemeFooter>
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` }
        }}
      >
        {/* <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" /> */}
        {` `}

        <Styled.a
          aria-label="Details"
          sx={{ ml: 0 }}
          href="https://ieee.org"
          target="_blank"
        >
          IEEE
        </Styled.a>
        <div sx={{ mx: 2 }}> |</div>
        <Styled.a
          aria-label="Details"
          sx={{ ml: 0 }}
          href="https://ravensoft.tech"
          target="_blank"
        >
          Ravensoft
        </Styled.a>
        <div sx={{ mx: 2 }}> |</div>

        <Styled.a
          aria-label="Details"
          sx={{ ml: 0 }}
          href="http://smartvalley.lk"
          target="_blank"
        >
          Smart Valley
        </Styled.a>

        <div sx={{ mx: 2 }}> |</div>

        <Styled.a
          aria-label="Details"
          sx={{ ml: 0 }}
          href="http://www.ucd.ie"
          target="_blank"
        >
          UCD
        </Styled.a>
        <div sx={{ mx: 2 }}> |</div>

        <Styled.a
          aria-label="Details"
          sx={{ ml: 0 }}
          href="http://nsbm.ac.lk"
          target="_blank"
        >
          NSBM
        </Styled.a>
      </Flex>
    </ThemeFooter>
  );
};

export default Footer;

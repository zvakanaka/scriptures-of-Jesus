import React from "react";
import {
  Accordion,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Heading,
  Link,
  Flex
} from "@chakra-ui/core";
import ColorModeToggle from "./ColorModeToggle";
import TopicalHeading from "./TopicalHeading";
import Page from "./Page";
import data from "./data/output-min.json";

function onCheck(key, checked) {
  const storedItem = localStorage.getItem(key);
  checked && !storedItem
    ? localStorage.setItem(key, new Date())
    : localStorage.removeItem(key);
}
export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <ColorModeProvider>
          <Page>
            <Heading p={3}>
              <Flex justify="space-between">
                <Link
                  isExternal
                  href="https://www.churchofjesuschrist.org/blog/i-studied-more-than-2200-scriptures-about-the-savior-in-six-weeks-here-is-a-little-of-what-i-learned"
                >
                  Scriptures of Jesus Christ
                </Link>
                <ColorModeToggle />
              </Flex>
            </Heading>
            <Accordion>
              {data.guideRefs.map((guideRef, i) => {
                return (
                  <TopicalHeading
                    key={guideRef.source}
                    heading={guideRef.display}
                    count={guideRef.length}
                    listItems={guideRef.ul}
                    onCheck={onCheck}
                  />
                );
              })}
            </Accordion>
          </Page>
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

// https://www.churchofjesuschrist.org/blog/i-studied-more-than-2200-scriptures-about-the-savior-in-six-weeks-here-is-a-little-of-what-i-learned?lang=eng
// https://www.churchofjesuschrist.org/broadcasts/article/worldwide-devotionals/2017/01/prophets-leadership-and-divine-law?lang=eng
// https://tech.churchofjesuschrist.org/forum/viewtopic.php?t=28362
// https://ldsperspectives.com/2019/12/04/jesus-christ-in-the-topical-guide-with-stephanie-dibb-sorensen/
// https://www.churchofjesuschrist.org/study/general-conference/2017/04/drawing-the-power-of-jesus-christ-into-our-lives?lang=eng
// https://scriptures.byu.edu/
// https://www.churchofjesuschrist.org/study/scriptures/tg/jesus-christ?lang=eng
// https://thirdhour.org/forums/topic/61247-elder-nelsons-2200-scripture-challenge/

import React from "react";
import {
  Accordion,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Heading,
  Flex,
  Link
} from "@chakra-ui/core";
import ColorModeToggle from "./ColorModeToggle";
import TopicalHeading from "./TopicalHeading";
import Page from "./Page";
import data from "./data/output.json";

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

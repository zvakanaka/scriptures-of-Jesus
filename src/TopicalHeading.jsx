import React, { useState } from "react";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  Link,
  // Icon,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Flex,
  useColorMode
} from "@chakra-ui/core";

function TopicalHeading({ heading, count, listItems, onCheck, storageMirror }) {
  const [isExpanded, setIsExpanded] = useState(() => false);
  const [checkedItems, setCheckedItems] = useState(
    listItems.map(({ key }, i) => storageMirror[key])
  );

  function updateCheckedItems(arr, key, checked) {
    onCheck(key, checked);
    setCheckedItems(arr);
  }

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const { colorMode } = useColorMode();

  return (
    <AccordionItem onChange={() => setIsExpanded(!isExpanded)}>
      <AccordionHeader>
        <Box flex="1" textAlign="left">
          <Flex>
            <Checkbox
              pr={3}
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={e =>
                setCheckedItems(
                  listItems.map(({ key }) => {
                    onCheck(key, e.target.checked);
                    return e.target.checked;
                  })
                )
              }
            />
            <Heading as="h2" size="lg">
              {heading} <span>{checkedItems.filter(Boolean).length}</span>/
              <span>{count}</span>
            </Heading>
          </Flex>
        </Box>
        <AccordionIcon />
      </AccordionHeader>

      {isExpanded ? (
        <AccordionPanel pb={4}>
          <List spacing={1} style={{ marginLeft: "25px" }}>
            {listItems.map((li, i) => {
              return (
                <ListItem key={li.key}>
                  <Checkbox
                    key={li.key}
                    isChecked={checkedItems[i]}
                    onChange={e =>
                      updateCheckedItems(
                        checkedItems.map((item, j) =>
                          i === j ? e.target.checked : item
                        ),
                        li.key,
                        e.target.checked
                      )
                    }
                  >
                    {li.nodes.map(node => {
                      if (node.tag === "A") {
                        return (
                          <Link
                            color={
                              colorMode === "dark" ? "blue.300" : "blue.500"
                            }
                            key={node.href}
                            isExternal
                            href={node.href}
                          >
                            {node.text}
                            {/* <Icon name="external-link" mx="2px" /> */}
                          </Link>
                        );
                      } else return node.text;
                    })}
                  </Checkbox>
                </ListItem>
              );
            })}
          </List>
        </AccordionPanel>
      ) : null}
    </AccordionItem>
  );
}

export default TopicalHeading;

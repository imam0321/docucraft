import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { remark } from "remark";
import html from "remark-html"

// ready the folder path
const postsDirectory = path.join(process.cwd(), "Docs");

export function getDocuments(params) {
  // console.log(postsDirectory);
  // ready the file name
  const fileNames = fs.readdirSync(postsDirectory);
  // console.log(fileNames);

  // files information
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    // console.log(matterResult);

    return { 
      id, 
      ...matterResult.data 
    };

  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1
    }
    return 0
  })
}

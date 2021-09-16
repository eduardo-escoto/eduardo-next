import fs from "fs";
import path from "path";

const notebooksDirectory = path.join(process.cwd(), "notebooks");

export function getAllNotebooks() {
  const fileNames = fs.readdirSync(notebooksDirectory);
  const allNotebookData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.ipynb$/, "");

    // Read markdown file as string
    const fullPath = path.join(notebooksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const nbJSON = JSON.parse(fileContents);
    // Use gray-matter to parse the post metadata section
    // const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...nbJSON.metadata,
    };
  });
  return allNotebookData;
}

export function getNotebookBySlug(slug) {
  const fullPath = path.join(notebooksDirectory, `${slug}.ipynb`);
  const content = fs.readFileSync(fullPath, "utf8");
  const nbJSON = JSON.parse(content);

  // Combine the data with the id
  return {
    content:nbJSON,
    ...nbJSON.metadata,
  };
}

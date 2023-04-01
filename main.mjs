import Notion from "@notionhq/client"
import Discord from "discord.js"

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})
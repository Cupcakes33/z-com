import React from "react";
import TabProvider from "../../_providers/TabProvider";
import Tab from "../../_components/Tab";
import PostForm from "../../_components/PostForm";
import Post from "@/app/(afterLogin)/_common/components/Post";

export default function HomePageFeature() {
  return (
    <TabProvider>
      <Tab />
      <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </TabProvider>
  );
}

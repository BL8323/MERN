import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      spacing={3}
      className={classes.container}
      alignItems="stretch"
    >
      {posts.map((post) => {
        <Grid key={post._id} item xs={12} sm={6} md={4}>
          <Post post={post} />
        </Grid>;
      })}
    </Grid>
  );
};

export default Posts;

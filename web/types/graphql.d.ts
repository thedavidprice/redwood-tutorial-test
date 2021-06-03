export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type CreateContactInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};





export type Mutation = {
  __typename?: 'Mutation';
  createContact?: Maybe<Contact>;
  createPost: Post;
  deletePost: Post;
  updatePost: Post;
};


export type MutationCreateContactArgs = {
  input: CreateContactInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['Int'];
  input: UpdatePostInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  contacts: Array<Contact>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  redwood?: Maybe<Redwood>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateContactInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type BlogPostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BlogPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'createdAt'>
  )> }
);

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'createdAt'>
  )> }
);

export type Find_Post_By_IdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Find_Post_By_Id = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'createdAt'>
  )> }
);

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & { updatePost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'createdAt'>
  ) }
);

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  ) }
);

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & { deletePost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  ) }
);

export type PostsVariables = Exact<{ [key: string]: never; }>;


export type Posts = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'createdAt'>
  )> }
);

export type CreateContactMutationVariables = Exact<{
  input: CreateContactInput;
}>;


export type CreateContactMutation = (
  { __typename?: 'Mutation' }
  & { createContact?: Maybe<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id'>
  )> }
);

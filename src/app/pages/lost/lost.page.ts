import { Component } from '@angular/core';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.page.html',
  styleUrls: ['./lost.page.scss'],
})
export class LostPage {
  lostPosts: { image: string; details: string; comments: string[]; user: string }[] = []; // Array to hold lost pet posts
  newPost = { image: '', details: '', user: 'Current User' }; // Object for new post, replace 'Current User' with actual user
  comment: string = ''; // Variable to hold new comment

  // Method to add a new lost pet post
  addPost() {
    if (this.newPost.image && this.newPost.details) {
      this.lostPosts.push({ ...this.newPost, comments: [] });
      this.newPost = { image: '', details: '', user: 'Current User' }; // Reset new post
    }
  }

  // Method to add comment to a post
  addComment(post: any, comment: string) {
    if (comment) {
      post.comments.push(comment);
    }
  }

  // Method to delete a post
  deletePost(post: any) {
    this.lostPosts = this.lostPosts.filter(p => p !== post);
  }
}

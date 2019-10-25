export default class instaService{
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

  getResource = async (url) =>  {
      const response = await fetch(`${this._apiBase}${url}`);

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}; received ${response.status}`);
      }

      return await response.json();

  }

  getAllPosts = async () => {
    const response = await this.getResource('/posts/');
    return response;
  }

  getAllPhotos = async () => {
    const response = await this.getResource('/posts');
    return response.map(this._transformPosts);
  }

  getAllUsers = async () => {
    const response = await this.getResource('/posts');
    return response.map(this._transformPostsToUsers);
  }

  _transformPostsToUsers = (post) => {
    return {      
      src: post.photo,
      alt: post.altname,
      name: post.name
    }    
  }

  _transformPosts = (post) => {
    return {
      id: post.id,
      src: post.src,
      alt: post.alt
    }
  }
} 
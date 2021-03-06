export const initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  savePosts: [],
  postLength: null,

  // 글 업로드
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  // 글 제거
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  // 글 전체 불러오기
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  // 특정 카테고리  상품 전체 불러오기
  loadCategoryPostsLoading: false,
  loadCategoryPostsDone: false,
  loadCategoryPostsError: null,

  // 특정 카테고리  상품 전체 객수 불러오기
  // loadCategoryLengthLoading: false,
  // loadCategoryLengthDone: false,
  // loadCategoryLengthError: null,

  // 이미지 업로드
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,

  // 특정 게시글 불러오기
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,

  // 좋아요
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,

  // 싫어요
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,

  // 댓글 달기
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

  // 검색
  searchPostsLoading: false,
  searchPostsDone: false,
  searchPostsError: null,

  // 포스터 수정
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,

  // 댓글 삭제
  commentDeleteLoading: false,
  commentDeleteDone: false,
  commentDeleteError: null,

  // 댓글 수정
  commentUpdateLoading: false,
  commentUpdateDone: false,
  commentUpdateError: null,

  // 포스터 이미지 수정
  updateImagesLoading: false,
  updateImagesDone: false,
  updateImagesError: null,

  // 포스터 이미지 수정
  loadHashtagPostsLoading: false,
  loadHashtagPostsDone: false,
  loadHashtagPostsError: null,

  // 게시글 찜
  savePostsLoading: false,
  savePostsDone: false,
  savePostsError: null,

  // 게시글 찜취소
  removeSavePostsLoading: false,
  removeSavePostsDone: false,
  removeSavePostsError: null,

  // 찜한 게시물 불러오기
  loadSavePostsLoading: false,
  loadSavePostsDone: false,
  loadSavePostsError: null,

  // 스크롤 내렸을때 이미지 더 불러오기
  morePosts: true,
};

// 포스터 업로드
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// 포스터 삭제
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

// 전체 포스터 get
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// 특정 카테고리 포스터 가져오기
export const LOAD_CATEGORY_POSTS_REQUEST = 'LOAD_CATEGORY_POSTS_REQUEST';
export const LOAD_CATEGORY_POSTS_SUCCESS = 'LOAD_CATEGORY_POSTS_SUCCESS';
export const LOAD_CATEGORY_POSTS_FAILURE = 'LOAD_CATEGORY_POSTS_FAILURE';

// 특정 카테고리 포스터 가져오기
export const LOAD_CATEGORY_LENGTH_REQUEST = 'LOAD_CATEGORY_LENGTH_REQUEST';
export const LOAD_CATEGORY_LENGTH_SUCCESS = 'LOAD_CATEGORY_LENGTH_SUCCESS';
export const LOAD_CATEGORY_LENGTH_FAILURE = 'LOAD_CATEGORY_LENGTH_FAILURE';

// 이미지 업로드
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

// 포스터 한개 get
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

// 한 유저 포스터 전체 get
export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

// 좋아요
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

// 싫어요
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

// 댓글 업로드
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 포스터 검색
export const SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST';
export const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
export const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';

// 포스터 수정
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

// 댓글 삭제
export const COMMENT_DELETE_REQUEST = 'COMMENT_DELETE_REQUEST';
export const COMMENT_DELETE_SUCCESS = 'COMMENT_DELETE_SUCCESS';
export const COMMENT_DELETE_FAILURE = 'COMMENT_DELETE_FAILURE';

// 댓글 수정
export const COMMENT_UPDATE_REQUEST = 'COMMENT_UPDATE_REQUEST';
export const COMMENT_UPDATE_SUCCESS = 'COMMENT_UPDATE_SUCCESS';
export const COMMENT_UPDATE_FAILURE = 'COMMENT_UPDATE_FAILURE';

// 포스터 이미지 수정
export const UPDATE_IMAGES_REQUEST = 'UPDATE_IMAGES_REQUEST';
export const UPDATE_IMAGES_SUCCESS = 'UPDATE_IMAGES_SUCCESS';
export const UPDATE_IMAGES_FAILURE = 'UPDATE_IMAGES_FAILURE';

// 해시태그 GET
export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

// 게시글 찜
export const SAVE_POSTS_REQUEST = 'SAVE_POSTS_REQUEST';
export const SAVE_POSTS_SUCCESS = 'SAVE_POSTS_SUCCESS';
export const SAVE_POSTS_FAILURE = 'SAVE_POSTS_FAILURE';

// 게시글 찜 취소
export const REMOVE_SAVE_POSTS_REQUEST = 'REMOVE_SAVE_POSTS_REQUEST';
export const REMOVE_SAVE_POSTS_SUCCESS = 'REMOVE_SAVE_POSTS_SUCCESS';
export const REMOVE_SAVE_POSTS_FAILURE = 'REMOVE_SAVE_POSTS_FAILURE';

// 게시글 찜 GET
export const LOAD_SAVE_POSTS_REQUEST = 'LOAD_SAVE_POSTS_REQUEST';
export const LOAD_SAVE_POSTS_SUCCESS = 'LOAD_SAVE_POSTS_SUCCESS';
export const LOAD_SAVE_POSTS_FAILURE = 'LOAD_SAVE_POSTS_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';
// 이미지는 기업에서 잘 안지운다고한다. 나중에 딥러니등 여러가지로 활용할수 있으므로.
// 동기액션이다. 만약 서버에서도 이미지를 지우고 싶다면 비동기 액션으로 만들주자.

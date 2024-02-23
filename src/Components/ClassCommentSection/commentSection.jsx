import React, { useState } from 'react';
import style from "../../ComponentStyles/ClassCommentSectionStyle/commentSectionStyle.module.css";
import CommentList from './commentList';

const CommentSection = () => {
    const [currentComment, setCurrentComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const onChangeHandler = (e) => {
        setCurrentComment(e.target.value);
    };

    const addComment = () => {
        if (currentComment.trim() !== '') {
            setCommentsList([...commentsList, { comment: currentComment.trim(), key: Date.now() }]);
            setCurrentComment('');
        }
    };

    return (
        <section className={style.commentSectionContainer}>
            <h1>Comment Section</h1>
            <label htmlFor="commentInput" id={style.commentInputLabel}>
                Leave a Comment
            </label>
            <section className={style.inputSection}>
                <input
                    type="text"
                    id={style.commentInput}
                    value={currentComment}
                    onChange={onChangeHandler}
                />
                <button
                    className={style.addComment}
                    onClick={addComment}
                >
                    &#43;
                </button>
            </section>
            <CommentList commentsList={commentsList} setCommentsList={setCommentsList} />
            {commentsList.length === 0 && (
                <p>No Comments. Be the first to leave a comment.</p>
            )}
        </section>
    );
};

export default CommentSection;

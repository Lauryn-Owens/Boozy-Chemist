import React from 'react';
import style from '../../ComponentStyles/ClassCommentSectionStyle/commentListStyle.module.css';
import StarRating from './starRating';

const CommentList = ({ commentsList, setCommentsList }) => {
    const deleteItem = (key) => {
        const updatedCommentsList = commentsList.filter(currComment => currComment.key !== key);
        setCommentsList(updatedCommentsList);
    };

    return (
        <>
            <h1>Comments</h1>
            {commentsList.map((curr, index) => (
                <div key={index} className={style.commentContainer}>
                    <section className={style.starRatingSection}>
                        <StarRating className={style.starRating} />
                    </section>
                    <li key={curr.key}>
                        {curr.comment}
                        <button
                            className={style.removeButton}
                            onClick={() => deleteItem(curr.key)}
                        >
                            &times;
                        </button>
                    </li>
                </div>
            ))}
        </>
    );
};

export default CommentList;

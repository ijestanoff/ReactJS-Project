import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetOneArtist } from '../../hooks/useArtists';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetAllComments, useCreateComment } from '../../hooks/useComments';
import artistsAPI from '../../api/artists-api';

const initialValues = {
    comment: ''
};

export default function ArtistDetails() {

    const navigate = useNavigate();
    const { artistId } = useParams();
    const [comments, dispatch] = useGetAllComments(artistId);
    const createComment = useCreateComment();
    const { email, userId } = useAuthContext();
    const [artist] = useGetOneArtist(artistId);

    const { isAuthenticated } = useAuthContext();

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(artistId, comment);

            // setComments(oldComments => [...oldComments, newComment]);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
        } catch (error) {
            console.log(error.message);
        }
    });

    const artistDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${artist.name} artist?`);
        if (!isConfirmed) {
            return;
        }

        try {
            await artistsAPI.remove(artistId);

            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const isOwner = userId === artist._ownerId;

    return (
        <section className="about-section section-padding" id="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                        <div className="services-info">
                            <h2 className="text-white mb-4">Details for Artist:</h2>
                            <h6 className="text-white mt-4">Name:</h6>
                            <p className="text-white">{artist.name}</p>
                            <h6 className="text-white mt-4">Birthdate:</h6>
                            <p className="text-white">{artist.birthday}</p>
                            <h6 className="text-white mt-4">Music:</h6>
                            <p className="text-white">{artist.music}</p>
                            <h6 className="text-white mt-4">YouTube Channel:</h6>
                            <p className="text-white">{artist.youTubeChannel}</p>
                            <h6 className="text-white mt-4">Summary:</h6>
                            <p className="text-white">{artist.summary}</p>
                            {isOwner && (
                                <>
                                    {/* <Link to={`/catalog/${artistId}/edit`} className="btn custom-btn d-inline-block d-none my-button">Edit</Link> */}
                                    {/* <Link to={`/catalog/${artistId}/edit`} className="btn custom-btn d-lg-block d-none my-button">Edit</Link> */}
                                    {/* <p></p> */}
                                    {/* <Link to="#" onClick={artistDeleteHandler} className="btn btn-secondary d-inline-block">Delete</Link> */}

                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={`/catalog/${artistId}/edit`} className="btn custom-btn d-lg-block d-none my-button">Edit</Link>
                                                {/* <button type="button" className="btn btn-primary">Button 1</button> */}
                                            </div>
                                            <div className="col">
                                                <Link to="#" onClick={artistDeleteHandler} className="btn custom-btn d-lg-block d-none my-button">Delete</Link>
                                                {/* <button type="button" className="btn btn-secondary">Button 2</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="about-text-wrap">
                            <img src={artist.imageUrl} className="about-image img-fluid" />
                        </div>
                    </div>
                    <p></p>
                    <div className="col-lg-6 col-12">
                        <h2 className="text-white mb-4">Comments:</h2>
                        <ul>
                            {comments.map(comment => (
                                <li key={comment._id}>
                                    <p className="text-white">{comment.author.email}: {comment.text}</p>
                                </li>
                            ))}
                        </ul>
                        {comments.length === 0 && <p className="no-comment">No comments.</p>}
                    </div>
                </div>
            </div>

            {isAuthenticated && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 mx-auto">
                            <h2 className="text-white text-center mb-4">Want to comment? Let's talk</h2>
                            <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                    <form className="custom-form contact-form mb-5 mb-lg-0" role="form" onSubmit={submitHandler}>
                                        <div className="contact-form-body">
                                            <textarea
                                                name="comment"
                                                rows={3}
                                                className="form-control"
                                                id="contact-message"
                                                placeholder="Comment..."
                                                onChange={changeHandler}
                                                value={values.comment}
                                            />
                                            <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                                <button type="submit" className="form-control">Add Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetOneArtist } from '../../hooks/useArtists';
// import { useForm } from '../../../../hooks/useForm';
// import { useAuthContext } from '../../../../contexts/AuthContext';
// import { useGetAllComments, useCreateComment } from '../../../../hooks/useComments';
import artistsAPI from '../../api/artists-api';

// const initialValues = {
//     comment: ''
// };

export default function ArtistDetails() {

    // const navigate = useNavigate();
    const { artistId } = useParams();
    //const [comments, dispatch] = useGetAllComments(artistId);
    //const createComment = useCreateComment();
    // const { email, userId } = useAuthContext();
    const [artist] = useGetOneArtist(artistId);

    // const { isAuthenticated } = useAuthContext();

    // const {
    //     changeHandler,
    //     submitHandler,
    //     values,
    // } = useForm(initialValues, async ({ comment }) => {
    //     try {
    //         const newComment = await createComment(artistId, comment);

    //         // setComments(oldComments => [...oldComments, newComment]);
    //         dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // });

    // const artistDeleteHandler = async () => {
    //     const isConfirmed = confirm(`Are you sure you want to delete ${artist.name} artist?`);
    //     if (!isConfirmed) {
    //         return;
    //     }

    //     try {
    //         await artistsAPI.remove(artistId);

    //         navigate('/');
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    //const isOwner = userId === artist._ownerId;

    return (
        <section className="about-section section-padding" id="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                        <div className="services-info">
                            <h2 className="text-white mb-4">Details for Artist:</h2>
                            <p className="text-white">{artist.name}</p>
                            <h6 className="text-white mt-4">Birthdate:</h6>
                            <p className="text-white">{artist.birthday}</p>
                            <h6 className="text-white mt-4">Music:</h6>
                            <p className="text-white">{artist.music}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-text-wrap">
                            <img src={artist.imageUrl} className="about-image img-fluid" />
                            {/* <div className="about-text-info d-flex">
                                <div className="d-flex">
                                    <i className="about-text-icon bi-person" />
                                </div>
                                <div className="ms-4">
                                    <h3>a happy moment</h3>
                                    <p className="mb-0">your amazing festival experience with us</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
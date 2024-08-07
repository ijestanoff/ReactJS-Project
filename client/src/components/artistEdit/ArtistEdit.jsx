import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useGetOneArtist } from '../../hooks/useArtists';
import artistsAPI from '../../api/artists-api';
import { useState } from 'react';

export default function ArtistEdit() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { artistId } = useParams();
    const [artist] = useGetOneArtist(artistId);

    const editHandler = async (values) => {
        if (values.name.length < 5) {
            return setError('Name must be at least 3 characters long!');
        }
        if (values.imageUrl.length < 10) {
            return setError('Image must be at least 10 characters long!');
        }
        if (values.birthday.length < 10) {
            return setError('Birthday must be at least 10 characters long!');
        }
        if (values.music.length < 3) {
            return setError('Music must be at least 3 characters long!');
        }
        if (values.youTubeChannel.length < 10) {
            return setError('Youtube channel must be at least 10 characters long!');
        }
        if (values.summary.length < 10) {
            return setError('Summary must be at least 10 characters long!');
        }

        try {
            await artistsAPI.update(artistId, values);
            
            navigate(`/catalog/${artistId}/details`);
        } catch (error) {
            return setError(error.message);
        }
    };

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(artist, editHandler);

    return (
        <section className="ticket-section section-padding">
            <div className="section-overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                        <form
                            className="custom-form ticket-form mb-5 mb-lg-0"
                            onSubmit={submitHandler}
                            role="form"
                        >
                            <h2 className="text-center mb-4">Edit Artist</h2>
                            <div className="ticket-form-body">

                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    value={values.name}
                                    onChange={changeHandler}
                                    placeholder=""
                                    required=""
                                />
                                <label htmlFor="imageUrl">Image address:</label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    id="imageUrl"
                                    className="form-control"
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                    required=""
                                />
                                <label htmlFor="birthday">Birthday:</label>
                                <input
                                    type="text"
                                    name="birthday"
                                    id="birthday"
                                    className="form-control"
                                    value={values.birthday}
                                    onChange={changeHandler}
                                    required=""
                                />
                                <label htmlFor="music">Music:</label>
                                <input
                                    type="text"
                                    name="music"
                                    id="music"
                                    className="form-control"
                                    value={values.music}
                                    onChange={changeHandler}
                                    required=""
                                />
                                <label htmlFor="youtubechannel">Youtube channel:</label>
                                <input
                                    type="text"
                                    name="youTubeChannel"
                                    id="youTubeChannel"
                                    className="form-control"
                                    value={values.youTubeChannel}
                                    onChange={changeHandler}
                                    required=""
                                />
                                <label htmlFor="summary">Summary:</label>
                                <textarea
                                    type="text"
                                    name="summary"
                                    id="summary"
                                    className="form-control"
                                    value={values.summary}
                                    onChange={changeHandler}
                                    required=""
                                />

                                {error && (
                                    <p>
                                        <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                                    </p>
                                )}
                                <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                    <button type="submit" className="form-control">
                                        Edit Artist
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
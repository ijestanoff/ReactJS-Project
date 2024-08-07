import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useGetFestivalData, useUpdateFestivalData } from '../../hooks/useFestival';
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

const initialValues = {
    startDay: '',
    startMonth: '',
    startYear: '',
    firstDayMorning: '',
    firstDayNight: '',
    secondDayMorning: '',
    secondDayNight: '',
    thirdDayMorning: '',
    thirdDayNight: '',
};

export default function Festival() {
    const [error, setError] = useState('');

    const { email } = useAuthContext();
    
    const navigate = useNavigate();
    const [festival] = useGetFestivalData();
    const festivalData = festival[0] || initialValues;

    const updateFestivalData = useUpdateFestivalData();

    const updateHandler = async (values) => {
        if (email !== 'admin@abv.bg') {
            return setError('Only an admin can change the festival data!')
        }
        if (Number(values.startDay) < 1 || Number(values.startDay) > 31) {
            return setError('Day must be number between 1 and 31!');
        }
        if (Number(values.startMonth) < 1 || Number(values.startMonth) > 12) {
            return setError('Month must be number between 1 and 12!');
        }
        if (Number(values.startYear) < 2024 || Number(values.startYear) > 2100) {
            return setError('Year must be number between 2024 and 2100!');
        }
        if (values.firstDayMorning.length < 3) {
            return setError('First day morning style must be at least 3 characters long!');
        }
        if (values.firstDayNight.length < 3) {
            return setError('First day night style must be at least 3 characters long!');
        }
        if (values.secondDayMorning.length < 3) {
            return setError('Second day morning style must be at least 3 characters long!');
        }
        if (values.secondDayNight.length < 3) {
            return setError('Second day night style must be at least 3 characters long!');
        }
        if (values.thirdDayMorning.length < 3) {
            return setError('Third day morning style must be at least 3 characters long!');
        }
        if (values.thirdDayNight.length < 3) {
            return setError('Third day night style must be at least 3 characters long!');
        }

        try {
            await updateFestivalData(values);
            navigate('/schedule');
        } catch (error) {
            return setError(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(festivalData, updateHandler);

    return (
        <section className="contact-section section-padding" id="section_6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 mx-auto">
                        <h2 className="text-center mb-4">Festival Data</h2>

                        <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                <form
                                    className="custom-form contact-form mb-5 mb-lg-0"
                                    role="form"
                                    onSubmit={submitHandler}
                                >
                                    <div className="contact-form-body">
                                        <label>Festival starting date:</label>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-6">
                                                <label>Day:</label>
                                                <input
                                                    type="number"
                                                    name="startDay"
                                                    id="startDay"
                                                    className="form-control"
                                                    placeholder="30"
                                                    value={values.startDay}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-6">
                                                <label>Month:</label>
                                                <input
                                                    type="number"
                                                    name="startMonth"
                                                    id="startMonth"
                                                    className="form-control"
                                                    placeholder="12"
                                                    value={values.startMonth}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-6">
                                                <label>Year:</label>
                                                <input
                                                    type="number"
                                                    name="startYear"
                                                    id="startYear"
                                                    className="form-control"
                                                    placeholder="2024"
                                                    value={values.startYear}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>First day morning style:</label>
                                                <input
                                                    type="text"
                                                    name="firstDayMorning"
                                                    id="firstDayMorning"
                                                    className="form-control"
                                                    placeholder="Rock"
                                                    value={values.firstDayMorning}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>First day night style:</label>
                                                <input
                                                    type="text"
                                                    name="firstDayNight"
                                                    id="firstDayNight"
                                                    className="form-control"
                                                    placeholder="Pop"
                                                    value={values.firstDayNight}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>Second day morning style:</label>
                                                <input
                                                    type="text"
                                                    name="secondDayMorning"
                                                    id="secondDayMorning"
                                                    className="form-control"
                                                    placeholder="Rock"
                                                    value={values.secondDayMorning}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>Second day night style:</label>
                                                <input
                                                    type="text"
                                                    name="secondDayNight"
                                                    id="secondDayNight"
                                                    className="form-control"
                                                    placeholder="Pop"
                                                    value={values.secondDayNight}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>Third day morning style:</label>
                                                <input
                                                    type="text"
                                                    name="thirdDayMorning"
                                                    id="thirdDayMorning"
                                                    className="form-control"
                                                    placeholder="Rock"
                                                    value={values.thirdDayMorning}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>Third day night style:</label>
                                                <input
                                                    type="text"
                                                    name="thirdDayNight"
                                                    id="thirdDayNight"
                                                    className="form-control"
                                                    placeholder="Pop"
                                                    value={values.thirdDayNight}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                        {error && (
                                            <p>
                                                <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                                            </p>
                                        )}
                                        <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                            <button type="submit" className="form-control">Update Festival Data</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
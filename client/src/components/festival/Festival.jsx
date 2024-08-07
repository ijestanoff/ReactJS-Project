import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useGetFestivalData, useUpdateFestivalData } from '../../hooks/useFestival';

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
    const navigate = useNavigate();
    const [festival] = useGetFestivalData();
    const festivalData = festival[0] || initialValues;

    console.log(festivalData);

    const updateFestivalData = useUpdateFestivalData();

    const updateHandler = async (values) => {
        try {
            await updateFestivalData(values);
            navigate('/schedule');
        } catch (error) {
            //TODO show error
            console.log(error.message);
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
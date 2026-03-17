// Les imports de base
import React from 'react';

// Les bibliothèques tierces
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Les styles
import './UserProfile.css';

const UserProfile = ({ onClose, onSave }) => {

    const savedUser = JSON.parse(localStorage.getItem('userProfile')) || {
        firstName: 'Alex',
        lastName: 'Johnson',
        email: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().min(2, "Trop court !").required("Prénom requis"),
        lastName: Yup.string().min(2, "Trop court !").required("Nom requis"),
        email: Yup.string().email("Email invalide").required("Email requis"),
    });

    const handleSubmit = (values) => {
        localStorage.setItem('userProfile', JSON.stringify(values));
        onSave(`${values.firstName} ${values.lastName}`);
    };

    return (
        <div className="vortex-modal-overlay" onClick={onClose}>
            <div className="vortex-modal-content p-4 rounded-4" onClick={(e) => e.stopPropagation()}>

                {/* En-tête */}
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div className="d-flex align-items-center gap-2">
                        <span className="material-symbols-outlined text-vortex-green fs-4">edit_square</span>
                        <h5 className="mb-0 fw-bold text-white">Modifier mon Profil</h5>
                    </div>
                    <button className="vortex-close-btn material-symbols-outlined" onClick={onClose}>close</button>
                </div>

                <Formik
                    initialValues={savedUser}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, values }) => {
                        // Génération dynamique de l'avatar en fonction des valeurs du formulaire
                        const avatarUrl = `https://ui-avatars.com/api/?name=${values.firstName}+${values.lastName}&background=102920&color=00ff88&bold=true&rounded=true&size=128`;

                        return (
                            <Form className="d-flex flex-column gap-4">

                                {/* Zone Avatar Dynamique (Sans bouton de modification) */}
                                <div className="text-center mb-5">
                                    <div className="vortex-avatar-container mb-3">
                                        <img
                                            src={avatarUrl}
                                            alt="User Avatar"
                                            className="vortex-avatar-circle"
                                        />
                                    </div>
                                    <p className="vortex-avatar-text mb-0">Avatar généré automatiquement</p>
                                    <p className="text-secondary small">Basé sur vos initiales</p>
                                </div>

                                {/* Section Informations Personnelles */}
                                <div>
                                    <div className="d-flex align-items-center gap-2 mb-3 text-secondary small text-uppercase fw-bold letter-spacing-1">
                                        <i className="bi bi-person-fill fs-6"></i>
                                        Informations Personnelles
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="firstName" className="vortex-label mb-1">Prénom</label>
                                            <Field name="firstName" type="text" className="vortex-input form-control" placeholder="Alexandre" />
                                            <ErrorMessage name="firstName" component="div" className="text-danger small mt-1" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="lastName" className="vortex-label mb-1">Nom</label>
                                            <Field name="lastName" type="text" className="vortex-input form-control" placeholder="Vortex" />
                                            <ErrorMessage name="lastName" component="div" className="text-danger small mt-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Section Contact & Sécurité */}
                                <div>
                                    <div className="d-flex align-items-center gap-2 mb-3 text-secondary small text-uppercase fw-bold letter-spacing-1">
                                        <i className="bi bi-at fs-6"></i>
                                        Contact & Sécurité
                                    </div>
                                    <div className="form-group mb-3 position-relative">
                                        <label htmlFor="email" className="vortex-label mb-1">Adresse Email</label>
                                        <div className="position-relative">
                                            <i className="bi bi-envelope-fill position-absolute text-secondary top-50 translate-middle-y start-0 ms-3"></i>
                                            <Field name="email" type="email" className="vortex-input vortex-input-icon form-control" placeholder="a.vortex@footreact.com" />
                                        </div>
                                        <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
                                    </div>
                                    <div className="vortex-info-box d-flex gap-3 align-items-start p-3 rounded-3">
                                        <i className="bi bi-info-circle-fill text-vortex-green fs-5 mt-1"></i>
                                        <p className="small text-secondary mb-0">
                                            La modification de votre adresse email nécessitera une nouvelle validation par code de sécurité.
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="d-flex gap-3 mt-4 pt-3 border-top border-secondary border-opacity-25 justify-content-center">
                                    <button type="button" className="vortex-btn-cancel" onClick={onClose}>
                                        Annuler
                                    </button>
                                    <button type="submit" disabled={isSubmitting} className="vortex-btn-save fw-bold letter-spacing-1 text-uppercase">
                                        Sauvegarder les modifications
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

export default UserProfile;
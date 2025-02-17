import React from 'react';
import Constant from '../../../shared/redux/constants';
import Auth from '../auth/redux/actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import Token from '../../../shared/helper';
import { Redirect } from 'react-router';
import Header from '../../../frontend/components/header/Header';
import Footer from '../../../frontend/components/footer/Footer';

class Verify extends React.Component {
	handleInput = e => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = e => {
		e.preventDefault();
		const { token } = this.props.match.params;
		this.props.verifyInit();
		const { email } = this.state;
		this.props.verify({ email }, token);
	};
	render() {
		const { payload, error, pending, match } = this.props;
		payload && payload.status === 200 && localStorage.setItem('cv-token', match.params.token);
		return (
			<>
				<Header />
				<main className='d-flex flex-column align-items-center min-vh-85'>
					{Token() ? <Redirect to='/' /> : ''}
					<div className='container m-auto'>
						<div className='row justify-content-sm-center align-items-center'>
							<div className='col-sm-7 col-md-7'>
								<div className='card text-center bg-transparent border-0'>
									<div className='card-header bg-white rounded'>
										<p className='card-text'>Confirm new Password</p>
									</div>
									<div className='card-body'>
										<div className='bd-example bd-example-tabs'>
											<div className='row'>
												<div className='col-2 ml-0 pl-0'>
													<div
														className='nav flex-column nav-pills'
														id='v-pills-tab'
														role='tablist'
														aria-orientation='vertical'
													>
														<a
															className='nav-link d-flex flex-column bg-white mb-3'
															id='v-pills-home-tab'
															data-toggle='pill'
															href='#v-pills-home'
															role='tab'
															aria-controls='v-pills-home'
															aria-selected='true'
														>
															<FontAwesomeIcon className='m-auto' icon={faLock} />
															Verify
														</a>
														<a
															href='#v-pills-home'
															className='nav-link text-center active d-flex flex-column'
														>
															<FontAwesomeIcon className='m-auto' icon={faUser} />
															Reset
														</a>
														<a
															href='#v-pills-home'
															className='nav-link d-flex flex-column bg-white mt-3'
														>
															<FontAwesomeIcon className='m-auto' icon={faCheck} />
															Success
														</a>
													</div>
												</div>
												<div className='col-10 bg-white p-4 rounded'>
													<div className='tab-content' id='v-pills-tabContent'>
														<div
															className='tab-pane fade show active'
															id='v-pills-home'
															role='tabpanel'
															aria-labelledby='v-pills-home-tab'
														>
															<p>password reset instructions will be sent to your email</p>
															<form
																className='font-weight-light rounded-sm'
																onSubmit={this.handleSubmit}
															>
																{error && (
																	<div
																		className='alert alert-danger rounded-sm text-center scale-in-ver-center'
																		role='alert'
																	>
																		{error.message}
																	</div>
																)}
																<hr className='my-4' />
																<div className='input-group form-group mb-3'>
																	<div className='input-group-prepend rounded-0'>
																		<span className='input-group-text rounded-0 bg-transparent p-0 border-0 '>
																			<FontAwesomeIcon icon={faLock} />
																		</span>
																	</div>
																	<input
																		name='password'
																		type='password'
																		className='form-control custom-input'
																		placeholder='enter your password'
																		onChange={this.handleInput}
																		required
																	/>
																	<div className='input-group-append'>
																		<span className='btn p-0 border-0 my-auto invisible'>
																			<FontAwesomeIcon icon={faEye} />
																		</span>
																	</div>
																</div>
																<div className='input-group form-group mb-3'>
																	<div className='input-group-prepend rounded-0'>
																		<span className='input-group-text rounded-0 bg-transparent p-0 border-0 '>
																			<FontAwesomeIcon icon={faLock} />
																		</span>
																	</div>
																	<input
																		name='cpmfrimPassword'
																		type='password'
																		className='form-control custom-input'
																		placeholder='confirm password'
																		onChange={this.handleInput}
																		required
																	/>
																	<div className='input-group-append'>
																		<span className='btn p-0 border-0 my-auto invisible'>
																			<FontAwesomeIcon icon={faEye} />
																		</span>
																	</div>
																</div>
																<div className='checkbox mb-3 font-weight-light'>
																	<label>
																		<input
																			className='mr-2'
																			type='checkbox'
																			value='remember-me'
																			required
																		/>{' '}
																		I agree with terms and conditions
																	</label>
																</div>
																{pending ? (
																	<button
																		className='btn font-weight-light rounded-sm btn-primary btn-block'
																		type='submit'
																		disabled
																	>
																		<span className='spinner-border spinner-border-sm mr-2'></span>
																		sending....
																	</button>
																) : (
																	<button
																		className='btn font-weight-light rounded-sm btn-primary btn-block'
																		type='submit'
																	>
																		reset
																	</button>
																)}
																<div className='w-100 text-center mt-3'>
																	<a href='/password'>have an account login</a>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		verifyInit: () =>
			dispatch({
				type: Constant.VERIFY_PENDING,
				pending: true,
			}),

		verify: async email => dispatch(await Auth.verifyUser(email)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.verifyUser.payload,
		pending: state.verifyUser.pending,
		error: state.verifyUser.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Verify);

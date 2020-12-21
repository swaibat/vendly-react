import React, { Component } from 'react';
import Toggle from '../../../shared/components/toggle-btn';

export default class Property extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { data } = this.props;
		return (
			<>
				<h6>product variables</h6>
				<hr />
				<div className='row variants'>
					<div className='col-md-3'>
						<Toggle label='Listed by :' data={data} name='listedBy' />
					</div>
					<div className='col-md-3'>
						<Toggle label='Furnished :' data={data} name='furnished' />
					</div>
					<div className='col-md-3'>
						<Toggle label='Pets allowed :' data={data} name='petsAllowed' />
					</div>
					<div className='col-md-3'>
						<Toggle label='Parking Lot :' data={data} name='parkingLot' />
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<input
								type='number'
								className='custom-input form-control'
								required='required'
								aria-label="Recipient's username"
								aria-describedby='basic-addon2'
							/>
							<div className='input-group-append'>
								<span className='input-group-text bg-white cv-chev right' id='basic-addon2'>
									M2
								</span>
							</div>
							<span className='bar' />
							<label className='cv-label' htmlhtmlFor='category'>
								Surface Area
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									{/* <ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512.002 512.002' style='enable-background:new 0 0 512.002 512.002;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M427.971,81.562H402.98c-3.731,0-6.093,2.363-6.093,4.974h-0.001v80.819c0,3.357,3.979,5.098,8.082,5.098 c3.979,0,8.082-1.74,8.082-5.098v-28.846h13.927c16.412,0,29.219-7.834,29.219-28.225v-0.745 C456.196,89.147,443.762,81.562,427.971,81.562z M440.031,111.528c0,9.698-4.973,14.299-13.055,14.299H413.05v-30.09h13.926 c8.082,0,13.055,4.601,13.055,14.299V111.528z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M293.069,113.157c-23.604-23.604-54.986-36.603-88.367-36.603c-33.381,0-64.763,12.999-88.367,36.603 c-2.849,2.848-2.849,7.466,0,10.315c2.848,2.848,7.466,2.848,10.314,0c20.849-20.848,48.568-32.33,78.052-32.33 c29.484,0,57.204,11.482,78.052,32.33c1.425,1.424,3.292,2.136,5.158,2.136c1.866,0,3.733-0.712,5.158-2.136 C295.917,120.624,295.917,116.005,293.069,113.157z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M262.978,143.248c-32.134-32.134-84.419-32.134-116.552,0c-2.849,2.848-2.849,7.467,0,10.315 c2.848,2.848,7.467,2.848,10.315,0c26.446-26.445,69.476-26.445,95.922,0c1.424,1.424,3.29,2.136,5.157,2.136 c1.866,0,3.733-0.712,5.158-2.136C265.826,150.715,265.826,146.096,262.978,143.248z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M233.363,172.862c-15.804-15.804-41.519-15.804-57.323,0c-2.849,2.848-2.849,7.466,0,10.315 c2.848,2.849,7.467,2.848,10.315,0c10.117-10.116,26.577-10.116,36.694,0c1.424,1.425,3.291,2.136,5.157,2.136 c1.866,0,3.733-0.712,5.157-2.136C236.212,180.328,236.212,175.711,233.363,172.862z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M358.922,314.919c-3.156-1.737-6.27-3.639-9.254-5.655l-48.245-32.592c-14.642-9.892-31.722-15.12-49.392-15.12H163.48 c-23.505,0-45.621,9.137-62.275,25.727c-8.56,8.529-18.312,15.663-28.985,21.205c-6.312,3.278-10.233,9.729-10.233,16.836 c0,10.466,8.514,18.98,18.98,18.98h30.19c4.028,0,7.294-3.266,7.294-7.294c0-4.028-3.266-7.294-7.294-7.294h-30.19 c-2.422,0-4.393-1.971-4.393-4.393c0-1.641,0.907-3.131,2.368-3.889c11.991-6.226,22.946-14.24,32.558-23.817 c13.9-13.848,32.36-21.474,51.979-21.474h19.825v53.573h-24.232c-4.028,0-7.294,3.266-7.294,7.294s3.266,7.294,7.294,7.294H359.07 c5.996,0,10.874-4.878,10.874-10.874C369.944,325.748,365.72,318.656,358.922,314.919z M197.894,329.713V276.14h54.138 c14.749,0,29.005,4.364,41.226,12.62l48.245,32.592c3.35,2.263,6.845,4.399,10.391,6.349c0.918,0.505,1.687,1.199,2.265,2.012 H197.894z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M215.966,355.388h-22.53c-4.028,0-7.294,3.266-7.294,7.294s3.266,7.294,7.294,7.294h22.53 c4.028,0,7.294-3.266,7.294-7.294C223.26,358.654,219.994,355.388,215.966,355.388z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M505.709,349.266l-2.304-3.824c-8.683-14.409-23.126-24.555-39.625-27.837l-18.831-3.745v-95.447h48.732 c10.034,0,18.196-8.163,18.196-18.196V58.166c0-10.034-8.163-18.196-18.196-18.196H351.63c-10.034,0-18.196,8.163-18.196,18.196 v53.885c0,4.028,3.265,7.294,7.294,7.294s7.294-3.266,7.294-7.294V58.166c0-1.99,1.619-3.609,3.609-3.609h142.052 c1.99,0,3.609,1.619,3.609,3.609v142.052c0,1.99-1.619,3.609-3.609,3.609H351.63c-1.99,0-3.609-1.619-3.609-3.609v-40.749 c0-4.028-3.265-7.294-7.294-7.294s-7.294,3.266-7.294,7.294v40.749c0,10.034,8.163,18.196,18.196,18.196h55.261v87.879 l-9.68-1.925c-13.36-2.657-26.385-10.72-35.021-16.555l-48.244-32.591c-18.355-12.399-39.764-18.953-61.914-18.953h-88.55 c-29.465,0-57.188,11.453-78.061,32.248c-13.208,13.159-29.834,22.134-48.081,25.956l-10.472,2.193 C11.299,299.926,0,313.838,0,329.744v70.64c0,8.426,4.975,16.083,12.676,19.505l29.052,12.912 c1.757,9.187,6.183,17.96,13.281,25.058c9.433,9.433,21.824,14.15,34.216,14.15c12.392,0,24.782-4.717,34.216-14.15 c6.067-6.067,10.171-13.36,12.336-21.087h242.236c2.165,7.727,6.27,15.02,12.337,21.087c9.14,9.139,21.29,14.173,34.216,14.173 c12.925,0,25.077-5.033,34.217-14.173c6.067-6.067,10.171-13.36,12.336-21.087h13.837c14.913,0,27.046-12.133,27.046-27.046 v-37.832C512,363.92,509.824,356.096,505.709,349.266z M421.478,218.413h8.884v92.546l-8.884-1.767V218.413z M113.125,447.545 c-6.384,6.384-14.872,9.9-23.901,9.9s-17.517-3.516-23.901-9.9c-10.241-10.241-12.519-25.47-6.845-37.936 c0.046-0.1,0.09-0.201,0.136-0.301c0.173-0.37,0.356-0.736,0.543-1.1c0.088-0.172,0.176-0.343,0.268-0.513 c0.169-0.316,0.345-0.63,0.525-0.942c0.124-0.215,0.251-0.428,0.38-0.64c0.167-0.275,0.336-0.549,0.512-0.82 c0.159-0.245,0.323-0.487,0.489-0.728c0.164-0.239,0.327-0.479,0.497-0.714c0.195-0.269,0.398-0.533,0.602-0.797 c0.159-0.206,0.314-0.414,0.478-0.617c0.24-0.297,0.491-0.587,0.741-0.877c0.143-0.165,0.28-0.334,0.426-0.497 c0.372-0.413,0.755-0.818,1.149-1.215c0.034-0.034,0.065-0.07,0.099-0.104c0.075-0.075,0.154-0.145,0.23-0.219 c0.334-0.328,0.67-0.652,1.013-0.963c0.089-0.081,0.183-0.156,0.273-0.236c0.342-0.303,0.686-0.604,1.038-0.891 c0.033-0.027,0.068-0.052,0.101-0.079c12.363-10.005,30.194-9.993,42.542,0.04c0.014,0.012,0.029,0.022,0.044,0.034 c0.377,0.307,0.746,0.629,1.113,0.955c0.066,0.058,0.134,0.113,0.199,0.172c0.424,0.383,0.84,0.778,1.248,1.186 c0.44,0.44,0.864,0.893,1.276,1.352c0.181,0.202,0.352,0.409,0.527,0.614c0.214,0.25,0.429,0.501,0.635,0.756 c0.231,0.287,0.454,0.579,0.674,0.871c0.124,0.163,0.247,0.327,0.367,0.492c0.267,0.368,0.527,0.74,0.778,1.117 c0.043,0.064,0.085,0.129,0.127,0.193C126.088,418.243,124.628,436.041,113.125,447.545z M448.466,447.545 c-6.385,6.384-14.873,9.9-23.902,9.9s-17.516-3.516-23.9-9.9c-11.505-11.504-12.965-29.305-4.384-42.409 c0.041-0.063,0.082-0.126,0.124-0.188c0.251-0.378,0.512-0.751,0.78-1.121c0.119-0.164,0.241-0.326,0.364-0.487 c0.221-0.294,0.445-0.587,0.678-0.876c0.205-0.253,0.417-0.501,0.63-0.749c0.177-0.207,0.35-0.417,0.533-0.62 c0.412-0.459,0.836-0.911,1.276-1.351c6.384-6.384,14.871-9.9,23.9-9.9s17.517,3.516,23.901,9.9 c0.44,0.44,0.864,0.893,1.276,1.352c0.182,0.202,0.353,0.41,0.529,0.616c0.214,0.249,0.428,0.499,0.633,0.753 c0.232,0.288,0.455,0.58,0.676,0.873c0.123,0.163,0.246,0.326,0.366,0.491c0.267,0.369,0.528,0.74,0.778,1.117 c0.043,0.064,0.085,0.128,0.127,0.192C461.429,418.242,459.969,436.042,448.466,447.545z M497.415,409.726h-0.002 c0,6.87-5.589,12.459-12.459,12.459h-12.008c-0.286-10.579-4.02-20.672-10.74-28.947c-0.045-0.056-0.088-0.114-0.134-0.17 c-0.416-0.507-0.847-1.004-1.285-1.498c-0.112-0.126-0.218-0.256-0.331-0.382c-0.464-0.511-0.944-1.012-1.432-1.506 c-0.083-0.084-0.159-0.172-0.243-0.255c-6.284-6.283-13.991-10.626-22.394-12.726c-3.82-0.955-7.783-1.446-11.823-1.446 c-3.231,0-6.414,0.315-9.514,0.929c-9.299,1.844-17.847,6.389-24.702,13.243c-0.082,0.082-0.157,0.168-0.238,0.251 c-0.49,0.497-0.972,0.999-1.437,1.512c-0.11,0.121-0.212,0.247-0.32,0.369c-0.442,0.498-0.878,1-1.297,1.512 c-0.042,0.051-0.081,0.104-0.123,0.156c-6.725,8.276-10.463,18.375-10.75,28.959H137.605 c-0.287-10.597-4.033-20.708-10.775-28.991c-0.031-0.039-0.061-0.078-0.092-0.117c-0.44-0.538-0.897-1.065-1.362-1.587 c-0.086-0.096-0.166-0.195-0.253-0.291c-0.545-0.601-1.105-1.193-1.684-1.772c-2.358-2.358-4.902-4.422-7.583-6.191 c-8.046-5.306-17.339-7.959-26.632-7.959c-12.391,0-24.783,4.717-34.216,14.15c-0.539,0.539-1.06,1.092-1.57,1.652 c-0.151,0.166-0.296,0.335-0.445,0.502c-0.36,0.407-0.714,0.818-1.059,1.234c-0.153,0.185-0.306,0.371-0.456,0.559 c-0.357,0.445-0.705,0.895-1.045,1.35c-0.106,0.142-0.215,0.281-0.318,0.424c-0.914,1.251-1.762,2.541-2.546,3.864 c-0.022,0.037-0.043,0.075-0.065,0.112c-0.383,0.651-0.75,1.311-1.101,1.978c-0.01,0.019-0.02,0.039-0.031,0.058 c-2.543,4.839-4.253,10.073-5.037,15.502l-22.733-10.104c-2.438-1.084-4.013-3.508-4.013-6.175v-70.64 c0-9.041,6.423-16.948,15.272-18.802l10.472-2.193c21.02-4.403,40.172-14.742,55.386-29.899 c18.12-18.053,42.186-27.995,67.765-27.995h88.55c19.229,0,37.814,5.69,53.748,16.453l48.244,32.591 c9.681,6.541,24.396,15.603,40.341,18.775l66.57,13.238c12.482,2.483,23.407,10.158,29.976,21.058l2.304,3.824 c2.747,4.557,4.198,9.779,4.198,15.1V409.726z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M104.883,407.986c-4.184-4.183-9.744-6.486-15.659-6.486s-11.476,2.304-15.658,6.486 c-4.182,4.182-6.486,9.743-6.486,15.658c0,5.915,2.304,11.476,6.486,15.658c4.182,4.182,9.743,6.486,15.659,6.486 c5.915,0,11.476-2.303,15.658-6.486C113.517,430.668,113.517,416.62,104.883,407.986z M94.567,428.987 c-1.427,1.427-3.325,2.213-5.343,2.213c-2.019,0-3.916-0.786-5.343-2.214c-1.427-1.427-2.214-3.324-2.214-5.343 c0-2.019,0.786-3.916,2.214-5.343c1.427-1.427,3.324-2.214,5.343-2.214c2.018,0,3.916,0.786,5.343,2.214 C97.513,421.247,97.513,426.041,94.567,428.987z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M440.223,407.987c-4.182-4.183-9.743-6.487-15.659-6.487c-5.915,0-11.475,2.303-15.659,6.486 c-8.633,8.634-8.633,22.682,0,31.316c4.183,4.183,9.744,6.486,15.659,6.486c5.916,0,11.476-2.303,15.658-6.485 c4.183-4.182,6.486-9.743,6.486-15.658S444.405,412.169,440.223,407.987z M429.907,428.988c-1.427,1.427-3.324,2.213-5.343,2.213 c-2.018,0-3.916-0.786-5.343-2.213c-2.946-2.946-2.946-7.74,0-10.686c1.427-1.427,3.325-2.214,5.343-2.214 c2.019,0,3.916,0.786,5.344,2.214c1.427,1.427,2.213,3.324,2.213,5.343C432.121,425.662,431.336,427.56,429.907,428.988z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" /> */}
									<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M469.333,225.088V128c0-29.397-23.936-53.333-53.333-53.333H96c-29.397,0-53.333,23.936-53.333,53.333v97.088 C18.368,230.037,0,251.584,0,277.333v64V384v42.667c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-32h469.333 v32c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V384v-42.667v-64 C512,251.584,493.632,230.037,469.333,225.088z M64,128c0-17.643,14.357-32,32-32h320c17.643,0,32,14.357,32,32v96h-29.355 c2.091-5.867,2.624-12.203,1.067-18.432l-10.667-42.667c-3.563-14.272-16.341-24.235-31.04-24.235h-68.672 c-17.643,0-32,14.357-32,32v42.667c0,3.755,0.768,7.317,1.963,10.667h-46.592c1.195-3.349,1.963-6.912,1.963-10.667v-42.667 c0-17.643-14.357-32-32-32h-68.672c-14.699,0-27.477,9.984-31.04,24.235l-10.667,42.667c-1.557,6.229-1.024,12.565,1.067,18.432 H64V128z M397.077,219.904c-2.027,2.603-5.099,4.096-8.405,4.096h-79.339c-5.888,0-10.667-4.779-10.667-10.667v-42.667 c0-5.888,4.779-10.667,10.667-10.667h68.672c4.907,0,9.152,3.328,10.347,8.085l10.667,42.667 C399.829,213.952,399.125,217.301,397.077,219.904z M213.312,170.645v42.667c0,5.888-4.779,10.667-10.667,10.667h-79.339 c-3.307,0-6.379-1.493-8.405-4.096s-2.752-5.952-1.941-9.152l10.667-42.667c1.216-4.736,5.461-8.064,10.347-8.085h68.672 C208.533,159.979,213.312,164.757,213.312,170.645z M490.667,373.333H21.333V352h469.333V373.333z M490.667,330.667H21.333 v-53.333c0-17.643,14.357-32,32-32h69.995h79.339h106.667h79.339h69.995c17.643,0,32,14.357,32,32V330.667z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Number of Bedrooms
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon src="data:image/svg+xml,%3Csvg height='486pt' viewBox='0 -4 486.6082 486' width='486pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m30.570312 292.796875 24.792969 113.859375c5.132813 23.53125 26.335938 40.84375 50.421875 40.84375h1.523438v22.5c0 3.863281 3.234375 7.5 7.101562 7.5h61.335938c2.234375-.007812 4.332031-1.078125 5.648437-2.886719l19.832031-27.113281h84.167969l19.828125 27.113281c1.316406 1.808594 3.414063 2.878907 5.648438 2.886719h61.335937c3.867188 0 7.101563-3.636719 7.101563-7.5v-22.5h1.523437c24.085938 0 45.289063-17.3125 50.425781-40.84375l24.792969-113.742188c18.4375-2.535156 31.757813-18.921874 30.472657-37.488281-1.285157-18.566406-16.738282-32.960937-35.351563-32.925781h-72.375c-1.445313-9.148438-9.285156-15.910156-18.542969-16h-100.066406c-9.257812.089844-17.09375 6.851562-18.539062 16h-162.339844v-167.195312c0-22.644532 18.355468-41 41-41 22.644531 0 41 18.355468 41 41v24.195312h-9.792969c-14.957031.023438-27.097656 12.097656-27.207031 27.050781v10.949219h-4.066406c-1.839844-.019531-3.609376.703125-4.914063 2.003906-1.304687 1.300782-2.03125 3.070313-2.019531 4.910156v23.027344c-.035156 3.863282 3.070312 7.023438 6.933594 7.058594h96.804687c3.929687-.007812 7.144531-3.132812 7.261719-7.058594v-23.027344c-.128906-3.898437-3.359375-6.976562-7.261719-6.914062h-4.738281v-10.949219c.058594-7.136719-2.730469-14-7.746094-19.074219-5.011719-5.078124-11.839844-7.949218-18.976562-7.976562h-10.277344v-24.195312c0-30.375-24.625-55-55-55s-55 24.625-55 55v167.195312h-29.863282c-18.605468-.074219-34.074218 14.304688-35.3593745 32.863281-1.2890625 18.5625 12.0468745 34.9375 30.4843745 37.433594zm179.738282-152.296875h-83v-9h83zm-12-33.949219v10.949219h-60v-10.949219c.101562-7.226562 5.980468-13.035156 13.207031-13.050781h34.070313c3.421874.023438 6.695312 1.417969 9.082031 3.871094 2.390625 2.449218 3.703125 5.757812 3.640625 9.179687zm-26.113282 356.949219h-50.886718v-16h62.566406zm193.113282 0h-50.882813l-11.683593-16h62.566406zm52.269531-59.648438c-3.839844 17.242188-19.082031 29.539063-36.746094 29.648438h-275.046875c-17.664062-.109375-32.90625-12.40625-36.746094-29.648438l-24.066406-110.351562h196.335938v69.445312c0 3.863282 3.199218 6.554688 7.070312 6.554688h123.683594c3.867188 0 7.246094-2.691406 7.246094-6.554688v-69.445312h62.335937zm-162.269531-61.351562h110v13h-110zm217.300781-84.5c-.007813 11.84375-9.589844 21.453125-21.4375 21.5h-71.863281v-43h71.863281c11.847656.042969 21.429687 9.652344 21.4375 21.5zm-212.421875-37.5h100.066406c2.703125-.019531 4.933594 2.101562 5.054688 4.796875v103.203125h-110v-103.203125c.039062-2.664063 2.214844-4.804687 4.878906-4.796875zm-224.742188 16h205.863282v43h-205.863282c-11.875 0-21.5-9.628906-21.5-21.5 0-11.875 9.625-21.5 21.5-21.5zm0 0'/%3E%3C/svg%3E" />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Number of Bathrooms
							</label>
						</div>
					</div>
				</div>
			</>
		);
	}
}

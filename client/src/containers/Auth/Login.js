import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    handleOnChangeInput = (event, id) => {
        this.setState({
            [id]: event.target.value,
        })
    }

    handleLogin = () => {
        console.log('username: ', this.state)
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="login-content">
                        <div className="login-box">
                            <h3 className="text-center mb-2">
                                ĐĂNG NHẬP TÀI KHOẢN
                            </h3>
                            <p className="text-center mb-5">
                                Bạn chưa có tài khoản ?
                                <a href="#">Đăng ký tại đây</a>
                            </p>
                            <form>
                                <div className="mb-4 login-input">
                                    <label className="form-label fw-bold">
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={this.state.username}
                                        onChange={(event) => this.handleOnChangeInput(event, 'username')}
                                    />
                                </div>
                                <div className="mb-2 login-input">
                                    <label className="form-label fw-bold">
                                        Mật khẩu <span className="text-danger">*</span>
                                    </label>
                                    <div className="custom-input-password">
                                        <input
                                            type={this.state.isShowPassword ? 'text': 'password'}
                                            className="form-control form-control-lg"
                                            placeholder="Mật khẩu"
                                            value={this.state.password}
                                            onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                        />
                                        <span onClick={() => {this.handleShowHidePassword()}}>
                                            <i class={this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                        </span>
                                    </div>
                                </div>
                                <p>
                                    Quên mật khẩu? Nhấn vào
                                    <a href="#">đây</a>
                                </p>
                                <button
                                    type="submit"
                                    className="login-btn mt-2"
                                    onClick={() => { this.handleLogin() }}
                                >
                                    Đăng nhập
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <p className="text-secondary">Hoặc đăng nhập bằng</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <button className="social-btn facebook">
                                        <i className="fab fa-facebook-square"></i>
                                        <label className="facebook-content">Facebook</label>
                                    </button>
                                    <button className="social-btn google">
                                        <i className="fab fa-google"></i>
                                        <label className="google-content">Google</label>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: { login: ["Invalid login credentials"] }, status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            @user =
            render "api/users/show"
        else
            render json: ["Not currently logged in"], status: 404
        end
    end
end

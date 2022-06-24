import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import "./HomeStyle.css";
import Videos from "./Videos";
// import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
// import Header from "../../components/header/Header";
// import PlayList from "../../components/playlist/Playlist";
// import "./home.css";
// import Grid from "../../components/videoGrid/VideoGrid";
// import AddtoPlaylistMenu from "../../components/AddToPlaylistMenu/AddToPlaylistMenu";
// import VideoContext from "../../contexts/VideoPlayerContext/videoPlayerContext";

const HomePage = () => {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.rootReducer.todos.singedIn);
	// const PlaylistsData = useSelector((state) => state.rootReducer.playlists);

	useEffect(() => {

        console.log("inside homepage useaEffect")
		const loggedInAs = localStorage.getItem("login_as");
		if (!isLoggedIn || loggedInAs === null) {
			navigate("/");
		}
	}, [isLoggedIn, navigate]);

	


	return (
        <div className="Home_Header">
            
            <img src="./CodeBin_Logo.png"/>
            <Header/>
            <Videos />
        </div>
			
	);
};

export default HomePage;

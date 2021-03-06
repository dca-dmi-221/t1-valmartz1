class Mp3{
    constructor(){
        this.songList = [];
        this.sounding = 0;
        this.playlist = [];
        this.nameList = [];
        this.currentPlaylist = 0;
        this.isSounding = true;
    }

    getIsSounding(){
        return this.isSounding
    }

    getSongList(){
        return this.songList;
    }

    getSounding(){
        return this.sounding;
    }

    getPlaylist(){
        return this.playlist;
    }

    getNameList(){
        return this.nameList;
    }

    getCurrentPlaylist(){
        return this.currentPlaylist;
    }

    setSounding(s){
        this.sounding = s;
    }

    setCurrentPlaylist(s){
        this.currentPlaylist = s;
    }

    setIsSounding(is){
        this.isSounding = is;
    }

// PAUSE AND PLAY

    playpause(){
        if(this.isSounding){
            this.songList[this.sounding].play();
            // this.isSounding = false;
        }else{
            this.songList[this.sounding].pause();
            // this.isSounding = true;
        }
    }

// STOP SONG

    stopSong(){
        this.songList[this.sounding].stop();
    }

// NEXT SONG

    nextSong(){
        if(this.sounding == this.songList.length-1){
            this.sounding = 0
        }else{
            this.sounding++;
        }
    }

// PREVIOUS SONG

    previousSong(){
        if(this.sounding == 0){
            this.sounding = this.songList.length-1;
        }else{
            this.sounding--;
        }
    }

    addSong(song){
        this.songList.push(song);
    }

    addName(name){
        this.nameList.push(name);
    }

    addPlaylist(plist){
        this.playlist.push(plist);
    }

// VOLUME ADJUSTMENT

    adjustVolume(value){
        this.songList[this.sounding].setVolume(value/100)
    }

//CONVERT FROM ONLY SECONDS TO MINUTES:SECONDS

    convertDuration(duration){
        let min = Math.floor(duration / 60);
        let sec = (duration - (min * 60))+'';

        let array = sec.split('');
        let secs = '';
        for(let i in array){
            if(array[i] == '.'){
                break;
            }else{
                if(sec<10 ){
                    secs+='0';
                }
                secs+=array[i];
            }
        }

       return ( min+':'+secs);
    }
}
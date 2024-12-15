// Import required modules
const express = require('express');
const app = express();
const port = 3500;

// Scheduler data
const schedulerData = {
  "scheduler": [
    [
      {
        "scheduler_id": 4,
        "theatre_id": 1,
        "start_date": "2024-03-15 06:39:46",
        "slot_index": 3,
        "video_links": "[{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":\"/videos/JOY STORY - 3 min OSCAR Nominated animated movie.mp4\"},{\"videoLink\":\"/videos/Sugar_Rate_the_ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      },
      {
        "scheduler_id": 5,
        "theatre_id": 1,
        "start_date": "2024-03-14 07:19:19",
        "slot_index": 2,
        "video_links": "[{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":\"/videos/JOY STORY - 3 min OSCAR Nominated animated movie.mp4\"},{\"videoLink\":\"/videos/Sugar_Rate_the_ad.mp4\"},{\"videoLink\":\"/videos/Sugar_Skin_Type_Ad.mp4\"},{\"videoLink\":\"/videos/Sugar_Which_Actress_Ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      },
      {
        "scheduler_id": 6,
        "theatre_id": 1,
        "start_date": "2024-03-17 06:47:11",
        "slot_index": 3,
        "video_links": "[{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":\"/videos/JOY STORY - 3 min OSCAR Nominated animated movie.mp4\"},{\"videoLink\":\"/videos/Sugar_Rate_the_ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      },
      {
        "scheduler_id": 23,
        "theatre_id": 1,
        "start_date": "2024-10-04 16:12:26",
        "slot_index": 1,
        "video_links": "[{\"videoLink\":\"/videos/Jawan_V4 - Latest.mp4\"},{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      }
    ],
    [
      {
        "scheduler_id": 4,
        "theatre_id": 1,
        "start_date": "2024-03-15 06:39:46",
        "slot_index": 3,
        "video_links": "[{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":\"/videos/JOY STORY - 3 min OSCAR Nominated animated movie.mp4\"},{\"videoLink\":\"/videos/Sugar_Rate_the_ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      },
      {
        "scheduler_id": 5,
        "theatre_id": 1,
        "start_date": "2024-03-14 07:19:19",
        "slot_index": 2,
        "video_links": "[{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":\"/videos/JOY STORY - 3 min OSCAR Nominated animated movie.mp4\"},{\"videoLink\":\"/videos/Sugar_Rate_the_ad.mp4\"},{\"videoLink\":\"/videos/Sugar_Skin_Type_Ad.mp4\"},{\"videoLink\":\"/videos/Sugar_Which_Actress_Ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      },
      {
        "scheduler_id": 6,
        "theatre_id": 1,
        "start_date": "2024-03-17 06:47:11",
        "slot_index": 3,
        "video_links": "[{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":\"/videos/JOY STORY - 3 min OSCAR Nominated animated movie.mp4\"},{\"videoLink\":\"/videos/Sugar_Rate_the_ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      },
      {
        "scheduler_id": 23,
        "theatre_id": 1,
        "start_date": "2024-10-04 16:12:26",
        "slot_index": 1,
        "video_links": "[{\"videoLink\":\"/videos/Jawan_V4 - Latest.mp4\"},{\"videoLink\":\"/videos/Sugar_Free_Sample_Ad.mp4\"},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null},{\"videoLink\":null}]"
      }
    ]
  ]
};


const allVideos = 
    [
    {
      "videoID": 1,
      "dateAndTime": "2024-03-12T16:41",
      "videoURL": "/videos/Sugar_Free_Sample_Ad.mp4",
      "adStartTime": 30,
      "duration": 46,
      "videoType": "Advertisement",
      "createdAt": "2024-03-12T11:13:14.000Z",
      "updatedAt": "2024-03-12T11:13:14.000Z"
    },
    {
      "videoID": 2,
      "dateAndTime": "2024-03-12T16:43",
      "videoURL": "/videos/JOY STORY - 3 min OSCAR Nominated animated movie.mp4",
      "adStartTime": 0,
      "duration": 180,
      "videoType": "Content",
      "createdAt": "2024-03-12T11:13:42.000Z",
      "updatedAt": "2024-03-12T11:13:42.000Z"
    },
    {
      "videoID": 4,
      "dateAndTime": "2024-03-13T12:08",
      "videoURL": "/videos/Sugar_Rate_the_ad.mp4",
      "adStartTime": 41,
      "duration": 58,
      "videoType": "Advertisement",
      "createdAt": "2024-03-13T06:39:39.000Z",
      "updatedAt": "2024-03-13T06:39:39.000Z"
    },
    {
      "videoID": 5,
      "dateAndTime": "2024-03-13T12:43",
      "videoURL": "/videos/Sugar_Skin_Type_Ad.mp4",
      "adStartTime": 46,
      "duration": 63,
      "videoType": "Advertisement",
      "createdAt": "2024-03-13T07:15:58.000Z",
      "updatedAt": "2024-03-13T07:15:58.000Z"
    },
    {
      "videoID": 6,
      "dateAndTime": "2024-03-13T12:46",
      "videoURL": "/videos/Sugar_Which_Actress_Ad.mp4",
      "adStartTime": 20,
      "duration": 36,
      "videoType": "Advertisement",
      "createdAt": "2024-03-13T07:17:43.000Z",
      "updatedAt": "2024-03-13T07:17:43.000Z"
    },
    {
      "videoID": 11,
      "dateAndTime": "2024-03-15T12:14",
      "videoURL": "/videos/Sugar_Free_Sample_Ad.mp4",
      "adStartTime": 30,
      "duration": 46,
      "videoType": "Advertisement",
      "createdAt": "2024-03-15T06:44:47.000Z",
      "updatedAt": "2024-03-15T06:44:47.000Z"
    },
    {
      "videoID": 12,
      "dateAndTime": "2024-04-01T13:29",
      "videoURL": "/videos/AFRAID _ Short Film (AWARD-WINNING).mp4",
      "adStartTime": 0,
      "duration": 180,
      "videoType": "Content",
      "createdAt": "2024-04-01T07:59:22.000Z",
      "updatedAt": "2024-04-01T07:59:22.000Z"
    },
    {
      "videoID": 13,
      "dateAndTime": "2024-04-01T14:09",
      "videoURL": "/videos/MADAM_DRIVER_200324.mov",
      "adStartTime": 0,
      "duration": 180,
      "videoType": "Content",
      "createdAt": "2024-04-01T08:39:35.000Z",
      "updatedAt": "2024-04-01T08:39:35.000Z"
    },
    {
      "videoID": 14,
      "dateAndTime": "2024-10-04T18:54",
      "videoURL": "/videos/Dolby_Amaze_Lossless-ATMOS-thedigitaltheater.mp4",
      "adStartTime": 0,
      "duration": 225,
      "videoType": "Content",
      "createdAt": "2024-10-04T13:26:06.000Z",
      "updatedAt": "2024-10-04T13:26:06.000Z"
    },
    {
      "videoID": 15,
      "dateAndTime": "2024-10-04T18:56",
      "videoURL": "/videos/dolby-core-universe-lossless-uhd-(www.demolandia.net).m2ts",
      "adStartTime": 0,
      "duration": 225,
      "videoType": "Content",
      "createdAt": "2024-10-04T13:26:41.000Z",
      "updatedAt": "2024-10-04T13:26:41.000Z"
    },
    {
      "videoID": 16,
      "dateAndTime": "2024-10-04T19:00",
      "videoURL": "/videos/URI - Opening Forest Mission.mkv",
      "adStartTime": 0,
      "duration": 4000,
      "videoType": "Content",
      "createdAt": "2024-10-04T13:30:21.000Z",
      "updatedAt": "2024-10-04T13:30:21.000Z"
    },
    {
      "videoID": 17,
      "dateAndTime": "2024-10-04T19:13",
      "videoURL": "/videos/Mission Impossible Rogue Nation - Opening Plane Heist (LOSSLESS).m2ts",
      "adStartTime": 0,
      "duration": 4000,
      "videoType": "Content",
      "createdAt": "2024-10-04T13:44:12.000Z",
      "updatedAt": "2024-10-04T13:44:12.000Z"
    },
    {
      "videoID": 18,
      "dateAndTime": "2024-10-04T20:04",
      "videoURL": "/videos/Dolby Atmos  Unfold    Trailer   Dolby.mp4",
      "adStartTime": 0,
      "duration": 30,
      "videoType": "Content",
      "createdAt": "2024-10-04T14:34:24.000Z",
      "updatedAt": "2024-10-04T14:34:24.000Z"
    },
    {
      "videoID": 19,
      "dateAndTime": "2024-10-04T20:04",
      "videoURL": "/videos/Uri.mp4",
      "adStartTime": 0,
      "duration": 4000,
      "videoType": "Content",
      "createdAt": "2024-10-04T14:35:14.000Z",
      "updatedAt": "2024-10-04T14:35:14.000Z"
    },
    {
      "videoID": 20,
      "dateAndTime": "2024-10-04T20:29",
      "videoURL": "/videos/Dolby-Core.mp4",
      "adStartTime": 0,
      "duration": 225,
      "videoType": "Content",
      "createdAt": "2024-10-04T14:59:33.000Z",
      "updatedAt": "2024-10-04T14:59:33.000Z"
    },
    {
      "videoID": 21,
      "dateAndTime": "2024-10-04T21:10",
      "videoURL": "/videos/Jawan_V1.mp4",
      "adStartTime": 0,
      "duration": 4000,
      "videoType": "Content",
      "createdAt": "2024-10-04T15:41:19.000Z",
      "updatedAt": "2024-10-04T15:41:19.000Z"
    },
    {
      "videoID": 22,
      "dateAndTime": "2024-10-04T21:19",
      "videoURL": "/videos/Jawan_V2.mp4",
      "adStartTime": 0,
      "duration": 4800,
      "videoType": "Content",
      "createdAt": "2024-10-04T15:50:30.000Z",
      "updatedAt": "2024-10-04T15:50:30.000Z"
    },
    {
      "videoID": 23,
      "dateAndTime": "2024-10-04T21:25",
      "videoURL": "/videos/Jawan_V4.mp4",
      "adStartTime": 0,
      "duration": 4800,
      "videoType": "Content",
      "createdAt": "2024-10-04T15:55:15.000Z",
      "updatedAt": "2024-10-04T15:55:15.000Z"
    },
    {
      "videoID": 24,
      "dateAndTime": "2024-10-04T21:40",
      "videoURL": "/videos/Jawan_V4 - Latest.mp4",
      "adStartTime": 0,
      "duration": 10000,
      "videoType": "Content",
      "createdAt": "2024-10-04T16:10:26.000Z",
      "updatedAt": "2024-10-04T16:10:26.000Z"
    },
    {
      "videoID": 25,
      "dateAndTime": "2024-10-05T14:16",
      "videoURL": "/videos/Cinemass Logo.mp4",
      "adStartTime": 0,
      "duration": 2,
      "videoType": "Content",
      "createdAt": "2024-10-05T08:46:53.000Z",
      "updatedAt": "2024-10-05T08:46:53.000Z"
    },
    {
      "videoID": 26,
      "dateAndTime": "2024-10-11T14:27",
      "videoURL": "/videos/Cinemass Logo.mp4",
      "adStartTime": 0,
      "duration": 100000,
      "videoType": "",
      "createdAt": "2024-10-05T08:57:33.000Z",
      "updatedAt": "2024-10-05T08:57:33.000Z"
    }
  ]


  const videodata = {
    "results": [
      {
        "displayToggle": "0",
        "userResponseToggle": "1",
        "videoID": 1,
        "videoDataID": 1,
        "questionTypeID": 1,
        "imageURL": "http://192.168.0.213:3000//images//IMAGE_FreeSample.jpg",
        "padX": {
          "padx1": 194,
          "padx2": 206,
          "padx3": null,
          "padx4": null,
          "padx5": null
        },
        "padY": {
          "pady1": 65,
          "pady2": 68,
          "pady3": null,
          "pady4": null,
          "pady5": null
        },
        "x": {
          "x1": 0,
          "x2": 0,
          "x3": null,
          "x4": null,
          "x5": null
        },
        "y": {
          "y1": 300,
          "y2": 502,
          "y3": null,
          "y4": null,
          "y5": null
        },
        "font": "Helvetica 34",
        "totalOptionNumber": 2,
        "options": {
          "optionOne": "Yes",
          "optionTwo": "No",
          "optionFive": "",
          "optionFour": "",
          "optionThree": ""
        }
      },
      {
        "displayToggle": "0",
        "userResponseToggle": "1",
        "videoID": 4,
        "videoDataID": 3,
        "questionTypeID": 2,
        "imageURL": "http://192.168.0.213:3000//images//IMAGE_RatetheAD.jpg",
        "padX": {
          "padx1": 99,
          "padx2": 81,
          "padx3": 108,
          "padx4": 157,
          "padx5": 97
        },
        "padY": {
          "pady1": 15,
          "pady2": 17,
          "pady3": 22,
          "pady4": 17,
          "pady5": 17
        },
        "x": {
          "x1": 0,
          "x2": 0,
          "x3": 0,
          "x4": 0,
          "x5": 0
        },
        "y": {
          "y1": 197,
          "y2": 295,
          "y3": 396,
          "y4": 506,
          "y5": 606
        },
        "font": "Helvetica 34",
        "totalOptionNumber": 5,
        "options": {
          "optionOne": "5 - Excellent",
          "optionTwo": "4 - Very Good",
          "optionFive": "1 - Very Bad",
          "optionFour": "2 - Bad",
          "optionThree": "3 - Average"
        }
      },
      {
        "displayToggle": "0",
        "userResponseToggle": "1",
        "videoID": 5,
        "videoDataID": 4,
        "questionTypeID": 3,
        "imageURL": "http://192.168.0.213:3000//images//IMAGE_SkinType.jpg",
        "padX": {
          "padx1": 156,
          "padx2": 198,
          "padx3": 195,
          "padx4": 11,
          "padx5": 136
        },
        "padY": {
          "pady1": 15,
          "pady2": 17,
          "pady3": 22,
          "pady4": 20,
          "pady5": 17
        },
        "x": {
          "x1": 0,
          "x2": 0,
          "x3": 0,
          "x4": 0,
          "x5": 0
        },
        "y": {
          "y1": 197,
          "y2": 295,
          "y3": 396,
          "y4": 506,
          "y5": 606
        },
        "font": "Helvetica 34",
        "totalOptionNumber": 5,
        "options": {
          "optionOne": "Normal",
          "optionTwo": "Dry",
          "optionFive": "Sensitive",
          "optionFour": "Combination (oily+dry)",
          "optionThree": "Oily"
        }
      },
      {
        "displayToggle": "0",
        "userResponseToggle": "1",
        "videoID": 6,
        "videoDataID": 5,
        "questionTypeID": 4,
        "imageURL": "http://192.168.0.213:3000//images//IMAGE_WhichActress.jpg",
        "padX": {
          "padx1": 130,
          "padx2": 74,
          "padx3": 39,
          "padx4": 116,
          "padx5": null
        },
        "padY": {
          "pady1": 23,
          "pady2": 23,
          "pady3": 23,
          "pady4": 23,
          "pady5": null
        },
        "x": {
          "x1": 0,
          "x2": 0,
          "x3": 0,
          "x4": 0,
          "x5": null
        },
        "y": {
          "y1": 257,
          "y2": 369,
          "y3": 481,
          "y4": 593,
          "y5": null
        },
        "font": "Helvetica 34",
        "totalOptionNumber": 4,
        "options": {
          "optionOne": "Alia Bhatt",
          "optionTwo": "Tapsee Pannu",
          "optionFive": "",
          "optionFour": "Soundarya",
          "optionThree": "Tamannah Bhatia"
        }
      },
      {
        "displayToggle": "0",
        "userResponseToggle": "1",
        "videoID": 11,
        "videoDataID": 9,
        "questionTypeID": 1,
        "imageURL": "http://192.168.0.195:3000//images//IMAGE_FreeSample.jpg",
        "padX": {
          "padx1": 194,
          "padx2": 206,
          "padx3": null,
          "padx4": null,
          "padx5": null
        },
        "padY": {
          "pady1": 65,
          "pady2": 68,
          "pady3": null,
          "pady4": null,
          "pady5": null
        },
        "x": {
          "x1": 0,
          "x2": 0,
          "x3": null,
          "x4": null,
          "x5": null
        },
        "y": {
          "y1": 300,
          "y2": 502,
          "y3": null,
          "y4": null,
          "y5": null
        },
        "font": "Helvetica 38",
        "totalOptionNumber": 2,
        "options": {
          "optionOne": "Yes",
          "optionTwo": "No",
          "optionFive": "",
          "optionFour": "",
          "optionThree": ""
        }
      }
    ]
  }



// API endpoint
app.get('/api/allSchedulerData', (req, res) => {
  res.json(schedulerData);
});

app.get('/api/allVideos', (req, res) => {
    res.json(allVideos);
  });

  app.get('/api/videodata', (req, res) => {
    res.json(videodata);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

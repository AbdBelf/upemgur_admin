App.PublicImagesRoute = Ember.Route.extend({

    model: function () {

    	
    	
		return $.ajax(
			{
				url : WS_HOST + '/public/upemgur/getPublicImages',
				type : "GET",
				contentType : 'application/json'						
			});

/*
return {
  "content" : [ {
    "id" : 1,
    "user" : {
      "username" : "test@test.com"
    },
    "exif" : "exif",
    "publicImage" : 0,
    "url" : "D:\\WorkspaceLuna\\UpemgurApp\\uploads\\ZElWAlT.jpg"
  }, {
    "id" : 5,
    "user" : {
      "username" : "test@test.com"
    },
    "exif" : "[Number of Components : 3, Resolution Units : none, Image Height : 720 pixels, Data Precision : 8 bits, tiff:BitsPerSample : 8, Compression Type : Baseline, Component 1 : Y component: Quantization table 0, Sampling factors 2 horiz/2 vert, Component 2 : Cb component: Quantization table 1, Sampling factors 1 horiz/1 vert, tiff:ImageLength : 720, Component 3 : Cr component: Quantization table 1, Sampling factors 1 horiz/1 vert, X Resolution : 1 dot, tiff:ImageWidth : 1280, Image Width : 1280 pixels, Content-Type : image/jpeg, Y Resolution : 1 dot]",
    "publicImage" : 0,
    "url" : "D:\\WorkspaceLuna\\UpemgurApp\\uploads\\bundesliga.jpg"
  }, {
    "id" : 6,
    "user" : {
      "username" : "test@test.com"
    },
    "exif" : "[Number of Components : 3, Resolution Units : none, Image Height : 720 pixels, Data Precision : 8 bits, tiff:BitsPerSample : 8, Compression Type : Baseline, Component 1 : Y component: Quantization table 0, Sampling factors 2 horiz/2 vert, Component 2 : Cb component: Quantization table 1, Sampling factors 1 horiz/1 vert, tiff:ImageLength : 720, Component 3 : Cr component: Quantization table 1, Sampling factors 1 horiz/1 vert, X Resolution : 1 dot, tiff:ImageWidth : 1280, Image Width : 1280 pixels, Content-Type : image/jpeg, Y Resolution : 1 dot]",
    "publicImage" : 0,
    "url" : "D:\\WorkspaceLuna\\UpemgurApp\\uploads\\bundesliga.jpg"
  }, {
    "id" : 7,
    "user" : {
      "username" : "test@test.com"
    },
    "exif" : "[Number of Components : 3, Resolution Units : none, Image Height : 720 pixels, Data Precision : 8 bits, tiff:BitsPerSample : 8, Compression Type : Baseline, Component 1 : Y component: Quantization table 0, Sampling factors 2 horiz/2 vert, Component 2 : Cb component: Quantization table 1, Sampling factors 1 horiz/1 vert, tiff:ImageLength : 720, Component 3 : Cr component: Quantization table 1, Sampling factors 1 horiz/1 vert, X Resolution : 1 dot, tiff:ImageWidth : 1280, Image Width : 1280 pixels, Content-Type : image/jpeg, Y Resolution : 1 dot]",
    "publicImage" : 0,
    "url" : "D:\\WorkspaceLuna\\UpemgurApp\\uploads\\bundesliga.jpg"
  }, {
    "id" : 8,
    "user" : {
      "username" : "test@test.com"
    },
    "exif" : "[Date/Time Original : 2008:03:14 13:59:26, meta:save-date : 2009-03-12T13:47:43, Unknown tag (0x4746) : 3, Author : Corbis, dcterms:created : 2008-03-14T13:59:26, date : 2009-03-12T13:47:43, Component 1 : Y component: Quantization table 0, Sampling factors 1 horiz/1 vert, creator : Corbis, tiff:ImageLength : 768, Component 2 : Cb component: Quantization table 1, Sampling factors 1 horiz/1 vert, Component 3 : Cr component: Quantization table 1, Sampling factors 1 horiz/1 vert, Creation-Date : 2008-03-14T13:59:26, DCT Encode Version : 1, meta:author : Corbis, X Resolution : 72 dots per unit, Date/Time Digitized : 2008:03:14 13:59:26, Color Transform : YCbCr, tiff:ImageWidth : 1024, Image Width : 1024 pixels, Sub-Sec Time Original : 54, Last-Save-Date : 2009-03-12T13:47:43, Windows XP Author : 䵍⨀\u0000ࠀ؀㈁Ȁ, Number of Components : 3, dcterms:modified : 2009-03-12T13:47:43, meta:creation-date : 2008-03-14T13:59:26, Flags 0 : 192, Image Height : 768 pixels, Resolution Units : inch, Data Precision : 8 bits, Sub-Sec Time Digitized : 54, dc:creator : Corbis, tiff:BitsPerSample : 8, Last-Modified : 2009-03-12T13:47:43, Compression Type : Baseline, Flags 1 : 0, exif:DateTimeOriginal : 2008-03-14T13:59:26, modified : 2009-03-12T13:47:43, Date/Time : 2009:03:12 13:47:43, Thumbnail Offset : 294 bytes, Thumbnail Length : 3545 bytes, Unknown tag (0xea1c) : [2036 bytes], Thumbnail Compression : JPEG (old-style), Unknown tag (0x4749) : 50, Content-Type : image/jpeg, Y Resolution : 72 dots per unit]",
    "publicImage" : 0,
    "url" : "D:\\WorkspaceLuna\\UpemgurApp\\uploads\\ZElWAlT.jpg"
  }, {
    "id" : 9,
    "user" : {
      "username" : "test@test.com"
    },
    "exif" : "[Comments : CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), quality = 90\n, Number of Components : 3, Resolution Units : none, Image Height : 1200 pixels, w:comments : CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), quality = 90\n, Data Precision : 8 bits, tiff:BitsPerSample : 8, Compression Type : Baseline, Component 1 : Y component: Quantization table 0, Sampling factors 2 horiz/2 vert, Component 2 : Cb component: Quantization table 1, Sampling factors 1 horiz/1 vert, tiff:ImageLength : 1200, Component 3 : Cr component: Quantization table 1, Sampling factors 1 horiz/1 vert, X Resolution : 1 dot, tiff:ImageWidth : 794, Jpeg Comment : CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), quality = 90, Image Width : 794 pixels, comment : CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), quality = 90\n, Content-Type : image/jpeg, Y Resolution : 1 dot]",
    "publicImage" : 0,
    "url" : "D:\\WorkspaceLuna\\UpemgurApp\\uploads\\doudounes.jpg"
  }, {
    "id" : 10,
    "user" : {
      "username" : "test@test.com"
    },
    "exif" : "[Number of Components : 3, Resolution Units : none, Image Height : 240 pixels, Data Precision : 8 bits, tiff:BitsPerSample : 8, Compression Type : Baseline, Component 1 : Y component: Quantization table 0, Sampling factors 2 horiz/2 vert, Component 2 : Cb component: Quantization table 1, Sampling factors 1 horiz/1 vert, tiff:ImageLength : 240, Component 3 : Cr component: Quantization table 1, Sampling factors 1 horiz/1 vert, X Resolution : 1 dot, tiff:ImageWidth : 320, Image Width : 320 pixels, Content-Type : image/jpeg, Y Resolution : 1 dot]",
    "publicImage" : 0,
    "url" : "D:\\WorkspaceLuna\\UpemgurApp\\uploads\\Casio QV-7000SX.jpg"
  } ],
  "size" : 0,
  "number" : 0,
  "totalPages" : 1,
  "numberOfElements" : 7,
  "totalElements" : 7
}
*/

    },
    setupController : function(controller, model) {
 		
 		controller.set('model', model.content);
	}
});

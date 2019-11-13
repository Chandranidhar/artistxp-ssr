import { Component, OnInit, TemplateRef } from '@angular/core';
// import {Commonservices} from "../app.commonservices";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Router} from "@angular/router";
import { MetaService } from '@ngx-meta/core';
import { HttpClient } from '@angular/common/http';
// import {moment} from "ngx-bootstrap/chronos/test/chain";
import * as moment from 'moment';
// import {moment} from "ngx-bootstrap/chronos/test/chain";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ScrollToService, ScrollToConfigOptions} from "@nicky-lenaers/ngx-scroll-to";
import { ApiService } from 'src/app/services/api-service';
declare var $:any;
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  modalRef: BsModalRef;
  modalRef1: BsModalRef;
  modalRef2: BsModalRef;
  public dataForm: FormGroup;
  private selectedFile;
  private videofileupload;
  private imagefileupload;
  private videouploadfolder;
  private imageuploadfolder;
  private musicuploadfolder;
  private fb;
  public serverurl;
  public fileurl;
  public competitionlist;
  public genrelist;
  public selectedcomp;
  public userid;
  public backstorytype;
  public backstoryval;
  public loading:boolean;
  public backstoryerror;
  public imageuploaderror;
  public videoeuploaderror;
  public musiceuploaderror;
  public iframevimeourl:SafeResourceUrl;
  public imageuploading:boolean;
  public videouploading:boolean;
  public musicuploading:boolean;
  public images:any;
  public videos:any;
  public musics:any;
  public iframevideourls:any;
  public iframemusicurls:any;
  public termsandconditionsmodal:any = false;

  constructor(public readonly meta: MetaService, fb: FormBuilder,public modalService: BsModalService,public router: Router,
    public apiService: ApiService,
    public _http: HttpClient,public sanitizer:DomSanitizer,public _scrollToService: ScrollToService) { 
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', 'Monthly Competitions for talented artists and performers to feature, where fans from social networks can vote for them to win competitions and exciting prizes.');
    this.meta.setTag('og:title', 'AudioDeadline Competitions for Talented Artists & Performers');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://testbed.artistxp.com/competition');
    this.meta.setTag('og:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');
    this.meta.setTag('og:keywords', 'Competitions for Artists, Artists Monthly Competitions');
   
    this.meta.setTag('twitter:description', 'Monthly Competitions for talented artists and performers to feature, where fans from social networks can vote for them to win competitions and exciting prizes.');
    this.meta.setTag('twitter:title', 'AudioDeadline Competitions for Talented Artists & Performers');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');

    window.scrollTo(1000,0);
    this.loading = false;
    this.imageuploading = false;
    this.videouploading = false;
    this.musicuploading = false;
    this.fb = fb;
    this.images = [];
    this.videos = [];
    this.musics = [];
    this.iframevideourls = [];
    this.iframemusicurls = [];
    this.userid = '';
    this.backstoryerror = '';
    this.serverurl=apiService.url;
    this.fileurl=apiService.fileurl;
    this.videofileupload=apiService.videofileupload;
    this.imagefileupload=apiService.imagefileupload;
    this.videouploadfolder= 'artistxpvideo/';
    this.imageuploadfolder= 'artistxpimage/';
    this.musicuploadfolder= 'artistxpmusic/';
    this.getCompetitionList();
    this.getGenreList();
   
  }

  ngOnInit() {
    this.dataForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      genre: ["", Validators.required],
      bio: ["", Validators.required],
      whydoyouwant: ["", Validators.required],
      backstorytype: [""],
      backstoryval: [""],
    });
  }
  public onSelectid(){
    console.log('Router selected');
  
  }

  open_termsandconditions(){
    this.termsandconditionsmodal = true;

  }
  getCompetitionList(){
    // var link =this.serverurl+'competitionlist';
    var link =this.serverurl+'competitionlist';
    var data = {type: 'active'};

    this._http.post(link, data)
        .subscribe(res => {
          let result:any;
           result = res;
          this.competitionlist = result.res;
          for(let i in this.competitionlist){
            if(this.competitionlist[i].putcontentright == 1){
              console.log(this.competitionlist[i].putcontentright);
             /* // $('#compwrapper1').addClass('classforcomppreview');
              $('.competitionblocknew').find('.compnewblock2contentwrapper').addClass('classforcomppreview');
              // $('.compnewblock2contentwrapper').addClass('classforcomppreview');
              // $("#compwrapper1").addClass("classforcomppreview");
              $('#compwrapper1').addClass('classforcomppreview');
              // console.log( $('.compnewblock2contentwrapper').html());
              // console.log($('#audioplayer3').html());*/
            }
          }
        },error => {
          console.log("Oooops!");
        });

  }

  getGenreList(){
    var link =this.serverurl+'genrelist';
    var data = {type: 'active'};

    this._http.post(link, data)
        .subscribe(res => {
          let result:any;
          result = res;
          this.genrelist = result.res;
        },error => {
          console.log("Oooops!");
        });

  }

  getDateT(timeu){
    return moment.unix(timeu).format('Do MMM, YYYY');
  }

  getbgimg(img){
    return this.sanitizer.bypassSecurityTrustStyle('url('+this.fileurl+img+')');
  }

  showPopup(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  closep(){
    this.modalRef.hide();
  }

  gotoSignUp(){
    this.modalRef.hide();
    this.router.navigateByUrl('/signup');
  }


  signupcompetition(template: TemplateRef<any>,item){
    this.images = [];
    this.videos = [];
    this.musics = [];
    this.iframevideourls = [];
    this.iframemusicurls = [];
    this.backstoryerror = '';
    this.backstorytype = '';
    this.backstoryval = '';
    this.selectedcomp = item;
    if(this.selectedcomp.backstoryrequired == 1){
      this.dataForm.controls['backstorytype'].setValidators(Validators.required);
    }else{
      this.dataForm.controls['backstorytype'].clearValidators();
    }
    this.dataForm.controls['name'].setValue('');
    this.dataForm.controls['name'].markAsUntouched();
    this.dataForm.controls['email'].setValue('');
    this.dataForm.controls['email'].markAsUntouched();
    this.dataForm.controls['genre'].setValue('');
    this.dataForm.controls['genre'].markAsUntouched();
    this.dataForm.controls['bio'].setValue('');
    this.dataForm.controls['bio'].markAsUntouched();
    this.dataForm.controls['whydoyouwant'].setValue('');
    this.dataForm.controls['whydoyouwant'].markAsUntouched();
    this.dataForm.controls['backstorytype'].setValue('');
    this.dataForm.controls['backstorytype'].markAsUntouched();
    this.dataForm.controls['backstoryval'].setValue('');
    this.dataForm.controls['backstoryval'].markAsUntouched();
    this.modalRef = this.modalService.show(template, {class: 'modal-lg signupcompkbnew'});
  }

  dosubmit(formval,template1: TemplateRef<any>,template2: TemplateRef<any>){
    this.imageuploaderror = '';
    this.videoeuploaderror = '';
    this.musiceuploaderror = '';
    var errorfield = '';
    for (let x in this.dataForm.controls) {
      if(this.dataForm.controls[x].status == 'INVALID' && errorfield == ''){
        errorfield = x+'div';
      }
      this.dataForm.controls[x].markAsTouched();
    }


    if (this.dataForm.valid) {
      if(this.selectedcomp.backstoryrequired == 1 && this.backstoryval == ''){
        this.backstoryerror = '*Please upload backstory video.';
        if(this.dataForm.controls['backstorytype'].value == 'Youtube'){
          this.backstoryerror = '*Please select youtube for backstory video.';
        }
        if(this.dataForm.controls['backstorytype'].value == 'Vimeo'){
          this.backstoryerror = '*Please select vimeo for backstory video.';
        }
        const config: ScrollToConfigOptions = {
          target: 'backstorytypediv'
        };

        this._scrollToService.scrollTo(config);

        return false;
      }
      if(this.selectedcomp.photorequired == 1 && this.images.length < this.selectedcomp.noofphoto){
        this.imageuploaderror = '*Please upload '+this.selectedcomp.noofphoto+' '+((this.selectedcomp.noofphoto > 1)?'images':'image');
        const config: ScrollToConfigOptions = {
          target: 'photovaldiv'
        };

        this._scrollToService.scrollTo(config);

        return false;
      }
      if(this.selectedcomp.videorequired == 1 && this.videos.length < this.selectedcomp.noofvideo){
        this.videoeuploaderror = '*Please upload '+this.selectedcomp.noofvideo+' '+((this.selectedcomp.noofvideo > 1)?'videos':'video');
        const config: ScrollToConfigOptions = {
          target: 'videovaldiv'
        };

        this._scrollToService.scrollTo(config);

        return false;
      }
      if(this.selectedcomp.musicrequired == 1 && this.musics.length < this.selectedcomp.noofmusic){
        this.musiceuploaderror = '*Please upload '+this.selectedcomp.noofmusic+' '+((this.selectedcomp.noofmusic > 1)?'musics':'music');
        const config: ScrollToConfigOptions = {
          target: 'musicvaldiv'
        };

        this._scrollToService.scrollTo(config);

        return false;
      }
      this.modalRef.hide();
      this.modalRef1 = this.modalService.show(template1);
      var link = this.serverurl+'competitionsignup';
      var data = {
        name: formval.name,
        email: formval.email,
        genre: formval.genre,
        bio: formval.bio,
        whydoyouwant: formval.whydoyouwant,
        userid: this.userid,
        competitionid: this.selectedcomp._id,
        backstorytype: this.backstorytype,
        backstoryval: this.backstoryval,
        images: this.images,
        videos: this.videos,
        musics: this.musics,
      };

      this._http.post(link, data)
          .subscribe(res => {
            this.modalRef1.hide();
            this.modalRef2 = this.modalService.show(template2);
            setTimeout(()=>{
              this.modalRef2.hide();
            }, 3000);
          }, error => {
            this.modalRef1.hide();
            console.log("Oooops!");
          });
    }else{
      for (let x in this.dataForm.controls) {
        if(this.dataForm.controls[x].status == 'INVALID'){
          console.log(x);
        }
      }
      const config: ScrollToConfigOptions = {
        target: errorfield
      };

      this._scrollToService.scrollTo(config);
    }
  }

  cngbackstorytype(ev){
    this.backstoryerror = '';
    this.loading = false;
    this.dataForm.controls['backstoryval'].setValue('');
    this.backstorytype = ev.target.value;
    this.backstoryval = '';
  }

  searchvideo(){
    this.backstoryerror = '';
    var keyval = this.dataForm.controls['backstoryval'].value;
    if(keyval !='' && (this.backstorytype == 'Youtube' || this.backstorytype == 'Vimeo')){
      this.backstoryval = '';
      this.iframevimeourl = '';
      this.loading = true;
      if(this.backstorytype == 'Youtube'){
        var yt_regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        if(typeof (keyval.match(yt_regex)) != 'undefined' &&  (keyval.match(yt_regex)) && typeof (keyval.match(yt_regex)[1]) != 'undefined'){
          this.loading = false;
          this.backstoryval =keyval.match(yt_regex)[1];
          this.iframevimeourl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.backstoryval+'?rel=0&amp;showinfo=0');
          this.dataForm.controls['backstoryval'].setValue('');
        }else{
          this.loading = false;
          this.backstoryerror = '*This is invalid, please enter valid youtube link';
        }
      }
      if(this.backstorytype == 'Vimeo'){
        var vimeo_regex = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i
        if(typeof (keyval.match(vimeo_regex)) != 'undefined' &&  (keyval.match(vimeo_regex)) && typeof (keyval.match(vimeo_regex)[1]) != 'undefined'){
          this.loading = false;
          this.backstoryval =keyval.match(vimeo_regex)[1];
          this.iframevimeourl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/'+this.backstoryval+'?title=0&byline=0&portrait=0');
          this.dataForm.controls['backstoryval'].setValue('');
        }else{
          this.loading = false;
          this.backstoryerror = '*This is invalid, please enter valid vimeo link';
        }
      }
    }
  }

  backstoryfileupload(event){
    this.backstoryerror = '';
    this.backstoryval = '';
    this.iframevimeourl = '';
    this.selectedFile = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    uploadData.append('uploadfolder', this.videouploadfolder);

    this._http.post(this.videofileupload, uploadData)
        .subscribe(event => {
          let res:any;
           res = event;
          if(res.error_code == 0){
            this.backstoryval = res.filename;
            this.iframevimeourl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+this.videouploadfolder+this.backstoryval);
          }else{
            console.log(1);
          }
        }, error => {
          console.log(1);
        });
  }

  photofileuploadfunc(event){
    this.imageuploaderror = '';
    this.imageuploading = true;
    this.selectedFile = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    uploadData.append('uploadfolder', this.imageuploadfolder);

    this._http.post(this.imagefileupload, uploadData)
        .subscribe(event => {
          this.imageuploading = false;
          let res:any;
           res = event;
          if(res.error_code == 0){
            this.images.push(res.filename);
          }else{
            this.imageuploading = false;
            this.imageuploaderror = res.msg;
          }
        }, error => {
          this.imageuploading = false;
          console.log(1);
        });
  }

  videofileuploadfunc(event){
    this.videoeuploaderror = '';
    this.videouploading = true;
    this.selectedFile = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    uploadData.append('uploadfolder', this.videouploadfolder);

    this._http.post(this.videofileupload, uploadData)
        .subscribe(event => {
          this.videouploading = false;
          let res:any;
          res = event;
          if(res.error_code == 0){
            this.videos.push(res.filename);
            this.iframevideourls.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+this.videouploadfolder+res.filename));
          }else{
            this.videouploading = false;
            this.videoeuploaderror = res.msg;
          }
        }, error => {
          this.videouploading = false;
          console.log(1);
        });
  }

  musicfileuploadfunc(event){
    this.musiceuploaderror = '';
    this.musicuploading = true;
    this.selectedFile = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    uploadData.append('uploadfolder', this.musicuploadfolder);

    this._http.post(this.videofileupload, uploadData)
        .subscribe(event => {
          this.musicuploading = false;
          let res:any;
           res = event;
          if(res.error_code == 0){
            this.musics.push(res.filename);
            this.iframemusicurls.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl+this.musicuploadfolder+res.filename));
          }else{
            this.musicuploading = false;
            this.musiceuploaderror = res.msg;
          }
        }, error => {
          this.musicuploading = false;
          console.log(1);
        });
  }

  deleteAssests(item,type){
    if(type == 'images'){
      var idx = this.images.indexOf(item);
      this.images.splice(idx, 1);
    }
    if(type == 'videos'){
      var idx = this.iframevideourls.indexOf(item);
      this.iframevideourls.splice(idx, 1);
      this.videos.splice(idx, 1);
    }
    if(type == 'musics'){
      var idx = this.iframemusicurls.indexOf(item);
      this.iframemusicurls.splice(idx, 1);
      this.musics.splice(idx, 1);
    }
  }

  onHidden(){

    this.termsandconditionsmodal = false;
  }






}
// let greeter = new CompetitionComponent();
// module FooModule {  
//     export var FooInstance = new CompetitionComponent();
// }

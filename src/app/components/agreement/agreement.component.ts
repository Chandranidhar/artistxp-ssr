import {Component, OnInit, TemplateRef} from '@angular/core';
import { ApiService } from '../../services/api-service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
// import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css'],
    // providers: [Commonservices]
})
export class AgreementComponent implements OnInit {

    // modalRef: BsModalRef;
  public serverurl;
  public userid;
  public fullname;
  public signval;
  public signval2;
  public currentdate;
  public randcode:any;
  public error;
    private userdata: CookieService;
    public invitesystem:any;

  constructor(public apiservice:ApiService ,public _http: HttpClient,public router: Router,public route:ActivatedRoute, userdata: CookieService) {
    window.scrollTo(0, 0);
      this.userdata = userdata;
    this.error = 0;
      this.signval = '';
      // this.serverurl=_commonservices.url;
      this.currentdate = new Date();
      this.route.params.subscribe(params=>{
          this.userid = params['userid'];
          this.getUserDetails();
      });
        // let data:any;
        // data = {"source": "invitationSystem","condition":{"_id_object":environment['invitation_id']}}
        
        // // this._http.post(link,({"source": "invitationSystem","condition":{"_id_object":"5d0c8819f09b0c4c69dff4e5"}}))
        // // this._http.post(link,data)
        // this.apiservice.postDatawithoutToken('datalist',data)
        // .subscribe(res=>{
        // let result:any;
        // result = res;
        // this.invitesystem = result.res[0].invitesystem;
        // })
  }

  ngOnInit() {
  }

    getUserDetails(){
        // var link =this.serverurl+'dashboard';
        var data = {_id: this.userid};

        // this._http.post(link, data)
        this.apiservice.postDatawithoutToken('dashboard',data)
            .subscribe(res => {
                let result:any;
                result = res;
                if (result.status == 'success' && typeof(result.item) != 'undefined'){
                    let userdet = result.item;
                    this.fullname = userdet.firstname+' '+userdet.lastname;
                    this.signval2 = userdet.firstname+' '+userdet.lastname;
                }
            },error => {
                console.log("Oooops!");
            });

    }

    openSignModal(template: TemplateRef<any>) {
        // this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    }

    onKey(ev){
        this.signval2 = ev.target.value;
    }

    cancel(){
        // this.modalRef.hide();
    }
    agree(){
        this.signval = this.signval2;
        // this.modalRef.hide();
    }

    renderToDashboard(){                    //Rendering to audiodeadline dashboard a/c to role of an user
      this.randcode= '';
      let characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < 10; i++ ) {                //generating a random string length of 10
          this.randcode += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      
      //sending the random string in user collection to store it, later it'll be matched in audiodeadline autologin endpoint
      let data = {
          "source": "user",
          "data": {
              "id": this.userdata.get('user_id'),
              'login_token':this.randcode
          }
         
      };
      this.apiservice.postDatawithoutToken('addorupdatedata',data)
      .subscribe(res=>{
          let result:any;
          result = res;
          if(result.status == "success"){
              window.open(environment['audiodeadline_url']+'/autologin/'+this.userid+'/'+this.randcode,'_blank');  // now rendering to autologin component(in Audiodeadline.com) where it will be automatically sent to preferable dashboard
          }
      })
  }

    contractagrrement(){
      this.error = 0;
      if(this.signval == ''){
          this.error = 1;
          return false;
      }else{
          var data = {_id: this.userid,sign: this.signval };
          this.apiservice.postDatawithoutToken('contractagrrement',data)
              .subscribe(res => {
                  let result:any;
                  result = res;
                  if(result.status=='success'){
                      this.userdata.set('userdetails', JSON.stringify(result.msg));
                      console.log('blastorpass');
                      console.log(this.userdata.get('blastorpass'));
                      this.renderToDashboard();
                    
                      if(this.userdata.get('blastorpass')=='true'){
                        this.router.navigateByUrl('/fbartistxpactive');
                      }
                      if(this.invitesystem == 'on'){
                        this.router.navigateByUrl('/invitationforlaunchplan');
                      }
                      else{
                        this.router.navigateByUrl('/profile');
                      }
                    
                  }
                  },error => {
                  console.log("Oooops!");
              });
      }
    }



}
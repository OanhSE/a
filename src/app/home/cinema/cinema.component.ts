import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../_service/cinema.service';
import { Film } from '../../_models/film';
import { Cinema } from '../../_models/cinema';
import { FormControl } from '@angular/forms';
import { CommonModule } from "@angular/common";
import {Router} from '@angular/router';
import {Address} from '../../_models/address';
@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  datacinemasTNB ={"Cinemas":{"Items":[{"DivisionCode":1,"DetailDivisionCode":"0008","DetailDivisionName":null,"CinemaID":8041,"CinemaNameUS":null,"CinemaName":"Cà Mau","SortSequence":6,"Latitude":null,"Longitude":null,"Distance":0.0,"SmartOrderYN":null},{"DivisionCode":1,"DetailDivisionCode":"0008","DetailDivisionName":null,"CinemaID":8016,"CinemaNameUS":null,"CinemaName":"Cần Thơ Cái Răng","SortSequence":7,"Latitude":null,"Longitude":null,"Distance":0.0,"SmartOrderYN":null},{"DivisionCode":1,"DetailDivisionCode":"0008","DetailDivisionName":null,"CinemaID":8018,"CinemaNameUS":null,"CinemaName":"Cần Thơ Ninh Kiều","SortSequence":8,"Latitude":null,"Longitude":null,"Distance":0.0,"SmartOrderYN":null},{"DivisionCode":1,"DetailDivisionCode":"0008","DetailDivisionName":null,"CinemaID":8020,"CinemaNameUS":null,"CinemaName":"Long Xuyên","SortSequence":27,"Latitude":null,"Longitude":null,"Distance":0.0,"SmartOrderYN":null}],"ItemCount":4},"IsOK":"true","ResultMessage":"SUCCESS","ResultCode":null}
  datacinemasDNB = {
    "Cinemas": {
      "Items": [
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0007",
          "DetailDivisionName": null,
          "CinemaID": 8019,
          "CinemaNameUS": null,
          "CinemaName": "Biên Hòa",
          "SortSequence": 4,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0007",
          "DetailDivisionName": null,
          "CinemaID": 8010,
          "CinemaNameUS": null,
          "CinemaName": "Bình Dương",
          "SortSequence": 5,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0007",
          "DetailDivisionName": null,
          "CinemaID": 8045,
          "CinemaNameUS": null,
          "CinemaName": "Dĩ An",
          "SortSequence": 12,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0007",
          "DetailDivisionName": null,
          "CinemaID": 8006,
          "CinemaNameUS": null,
          "CinemaName": "Đồng Nai",
          "SortSequence": 15,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0007",
          "DetailDivisionName": null,
          "CinemaID": 8031,
          "CinemaNameUS": null,
          "CinemaName": "Tây Ninh",
          "SortSequence": 40,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0007",
          "DetailDivisionName": null,
          "CinemaID": 8015,
          "CinemaNameUS": null,
          "CinemaName": "Vũng Tàu",
          "SortSequence": 49,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        }
      ],
      "ItemCount": 6
    },
    "IsOK": "true",
    "ResultMessage": "SUCCESS",
    "ResultCode": null
  }
  datacinemasNMT = {
    "Cinemas": {
      "Items": [
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0006",
          "DetailDivisionName": null,
          "CinemaID": 8036,
          "CinemaNameUS": null,
          "CinemaName": "Bảo Lộc",
          "SortSequence": 3,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0006",
          "DetailDivisionName": null,
          "CinemaID": 8007,
          "CinemaNameUS": null,
          "CinemaName": "Đà Nẵng",
          "SortSequence": 11,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0006",
          "DetailDivisionName": null,
          "CinemaID": 8047,
          "CinemaNameUS": null,
          "CinemaName": "Hội An",
          "SortSequence": 22,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0006",
          "DetailDivisionName": null,
          "CinemaID": 8004,
          "CinemaNameUS": null,
          "CinemaName": "Nha Trang Thái Nguyên",
          "SortSequence": 32,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0006",
          "DetailDivisionName": null,
          "CinemaID": 8038,
          "CinemaNameUS": null,
          "CinemaName": "Nha Trang Trần Phú",
          "SortSequence": 33,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0006",
          "DetailDivisionName": null,
          "CinemaID": 8043,
          "CinemaNameUS": null,
          "CinemaName": "Phan Rang",
          "SortSequence": 36,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0006",
          "DetailDivisionName": null,
          "CinemaID": 8011,
          "CinemaNameUS": null,
          "CinemaName": "Phan Thiết",
          "SortSequence": 37,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        }
      ],
      "ItemCount": 7
    },
    "IsOK": "true",
    "ResultMessage": "SUCCESS",
    "ResultCode": null
  }
  datacinemasBMT = {
    "Cinemas": {
      "Items": [
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0005",
          "DetailDivisionName": null,
          "CinemaID": 8037,
          "CinemaNameUS": null,
          "CinemaName": "Đồng Hới",
          "SortSequence": 14,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0005",
          "DetailDivisionName": null,
          "CinemaID": 8013,
          "CinemaNameUS": null,
          "CinemaName": "Huế",
          "SortSequence": 23,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0005",
          "DetailDivisionName": null,
          "CinemaID": 8035,
          "CinemaNameUS": null,
          "CinemaName": "Thanh Hóa",
          "SortSequence": 43,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0005",
          "DetailDivisionName": null,
          "CinemaID": 8029,
          "CinemaNameUS": null,
          "CinemaName": "Vinh",
          "SortSequence": 48,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        }
      ],
      "ItemCount": 4
    },
    "IsOK": "true",
    "ResultMessage": "SUCCESS",
    "ResultCode": null
  }
  datacinemasDBTB ={
    "Cinemas": {
      "Items": [
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0004",
          "DetailDivisionName": null,
          "CinemaID": 8014,
          "CinemaNameUS": null,
          "CinemaName": "Hạ Long",
          "SortSequence": 19,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0004",
          "DetailDivisionName": null,
          "CinemaID": 8030,
          "CinemaNameUS": null,
          "CinemaName": "Tuyên Quang",
          "SortSequence": 45,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0004",
          "DetailDivisionName": null,
          "CinemaID": 8021,
          "CinemaNameUS": null,
          "CinemaName": "Việt Trì",
          "SortSequence": 47,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        }
      ],
      "ItemCount": 3
    },
    "IsOK": "true",
    "ResultMessage": "SUCCESS",
    "ResultCode": null
  }
  datacinemasDBSH = {
    "Cinemas": {
      "Items": [
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8017,
          "CinemaNameUS": null,
          "CinemaName": "Bắc Giang",
          "SortSequence": 1,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8039,
          "CinemaNameUS": null,
          "CinemaName": "Bắc Ninh",
          "SortSequence": 2,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8033,
          "CinemaNameUS": null,
          "CinemaName": "Hải Dương",
          "SortSequence": 20,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8022,
          "CinemaNameUS": null,
          "CinemaName": "Hải Phòng",
          "SortSequence": 21,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8032,
          "CinemaNameUS": null,
          "CinemaName": "Nam Định",
          "SortSequence": 30,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8023,
          "CinemaNameUS": null,
          "CinemaName": "Ninh Bình",
          "SortSequence": 34,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8040,
          "CinemaNameUS": null,
          "CinemaName": "Phủ Lý",
          "SortSequence": 38,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0003",
          "DetailDivisionName": null,
          "CinemaID": 8026,
          "CinemaNameUS": null,
          "CinemaName": "Thái Bình",
          "SortSequence": 41,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        }
      ],
      "ItemCount": 8
    },
    "IsOK": "true",
    "ResultMessage": "SUCCESS",
    "ResultCode": null
  }
  datacinemasHN =
{
  "Cinemas": {
    "Items": [
      {
        "DivisionCode": 1,
        "DetailDivisionCode": "0002",
        "DetailDivisionName": null,
        "CinemaID": 8005,
        "CinemaNameUS": null,
        "CinemaName": "Hà Đông",
        "SortSequence": 1,
        "Latitude": null,
        "Longitude": null,
        "Distance": 0.0,
        "SmartOrderYN": null
      },
      {
        "DivisionCode": 1,
        "DetailDivisionCode": "0002",
        "DetailDivisionName": null,
        "CinemaID": 8049,
        "CinemaNameUS": null,
        "CinemaName": "Kosmo",
        "SortSequence": 2,
        "Latitude": null,
        "Longitude": null,
        "Distance": 0.0,
        "SmartOrderYN": null
      },
      {
        "DivisionCode": 1,
        "DetailDivisionCode": "0002",
        "DetailDivisionName": null,
        "CinemaID": 8034,
        "CinemaNameUS": null,
        "CinemaName": "Long Biên",
        "SortSequence": 4,
        "Latitude": null,
        "Longitude": null,
        "Distance": 0.0,
        "SmartOrderYN": null
      },
      {
        "DivisionCode": 1,
        "DetailDivisionCode": "0002",
        "DetailDivisionName": null,
        "CinemaID": 8048,
        "CinemaNameUS": null,
        "CinemaName": "Minh Khai",
        "SortSequence": 5,
        "Latitude": null,
        "Longitude": null,
        "Distance": 0.0,
        "SmartOrderYN": null
      },
      {
        "DivisionCode": 1,
        "DetailDivisionCode": "0002",
        "DetailDivisionName": null,
        "CinemaID": 8025,
        "CinemaNameUS": null,
        "CinemaName": "Thăng Long",
        "SortSequence": 6,
        "Latitude": null,
        "Longitude": null,
        "Distance": 0.0,
        "SmartOrderYN": null
      }
    ],
    "ItemCount": 5
  },
  "IsOK": "true",
  "ResultMessage": "SUCCESS",
  "ResultCode": null
}

  datacinemas = {
    "Cinemas": {
      "Items": [
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8009,
          "CinemaNameUS": null,
          "CinemaName": "Cantavil",
          "SortSequence": 1,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8008,
          "CinemaNameUS": null,
          "CinemaName": "Cộng Hòa",
          "SortSequence": 2,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8027,
          "CinemaNameUS": null,
          "CinemaName": "Gò Vấp",
          "SortSequence": 4,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8044,
          "CinemaNameUS": null,
          "CinemaName": "Gold View",
          "SortSequence": 5,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8046,
          "CinemaNameUS": null,
          "CinemaName": "Moonlight",
          "SortSequence": 6,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8001,
          "CinemaNameUS": null,
          "CinemaName": "Nam Sài Gòn",
          "SortSequence": 7,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8024,
          "CinemaNameUS": null,
          "CinemaName": "Nowzone",
          "SortSequence": 8,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8012,
          "CinemaNameUS": null,
          "CinemaName": "Phú Thọ",
          "SortSequence": 9,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8028,
          "CinemaNameUS": null,
          "CinemaName": "Thủ Đức",
          "SortSequence": 10,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        },
        {
          "DivisionCode": 1,
          "DetailDivisionCode": "0001",
          "DetailDivisionName": null,
          "CinemaID": 8042,
          "CinemaNameUS": null,
          "CinemaName": "Ung Văn Khiêm",
          "SortSequence": 11,
          "Latitude": null,
          "Longitude": null,
          "Distance": 0.0,
          "SmartOrderYN": null
        }
      ],
      "ItemCount": 10
    },
    "IsOK": "true",
    "ResultMessage": "SUCCESS",
    "ResultCode": null
  }
  listHCM ;
  listTNB;
  listDNB;
  listNMT;
  listBMT;
  listDBTB;
  listDBSH;
  listHN;

  myControl = new FormControl();
  cinemadetail$: Cinema = new Cinema(1, '1', new Address('1', '1', '1'));

  cinemas: Cinema[];
  constructor(
    private cinamaService: CinemaService,
    private  router: Router

  ) {

    this.listHCM = this.datacinemas.Cinemas.Items;
    this.listTNB = this.datacinemasTNB.Cinemas.Items;
    this.listDNB = this.datacinemasDNB.Cinemas.Items;
    this.listNMT = this.datacinemasNMT.Cinemas.Items;
    this.listBMT = this.datacinemasBMT.Cinemas.Items;
    this.listDBTB = this.datacinemasDBTB.Cinemas.Items;
    this.listDBSH = this.datacinemasDBSH.Cinemas.Items;
    this.listHN = this.datacinemasHN.Cinemas.Items;
  }

  ngOnInit(): void {
    this.getALlCinema();

  }
  tranferBySingle(cinema: Cinema): void{
    this.cinemadetail$ = cinema;
    console.log('cinema', cinema);
  }
  getALlCinema(): void {

    this.cinamaService.getCinemaByArea(1).subscribe((result) => {
      this.listHCM = result;
    });
    this.cinamaService.getCinemaByArea(2).subscribe((result) => {
      this.listHN = result;
    });
    this.cinamaService.getCinemaByArea(3).subscribe((result) => {
      this.listDBSH = result;
    });

  }


}

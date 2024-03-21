import React, { Component } from "react";
import { Modal } from "bootstrap";
import Card from "../card";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      buku: [
        {
          isbn: "12345",
          judul: "JOJO Steel Ball Run Vol.24",
          penulis: "Hirohiko Araki",
          penerbit: "Gramedia",
          cover: "https://static.jojowiki.com/images/2/24/latest/20191015215021/Volume_104.jpg"
        },
        {
          isbn: "123456",
          judul: "JOJO Steel Ball Run Vol.17",
          penulis: "Hirohiko Araki",
          penerbit: "Gramedia",
          cover: "https://static.jojowiki.com/images/a/aa/latest/20230121002011/Volume_97.jpg"
        },
        {
          isbn: "1234567",
          judul: "JOJO Steel Ball Run Vol.15",
          penulis: "Hirohiko Araki",
          penerbit: "Gramedia",
          cover: "https://static.jojowiki.com/images/e/e6/latest/20230121002719/Volume_95.jpg"
        },
      ],
      action: "",
      isbn: "",
      judul: "",
      penulis: "",
      penerbit: "",
      cover: "",
      keyword: "",
      filterBuku: [],
      selectedItem: null,
      modal: null,
    };
    this.state.filterBuku = this.state.buku;
  }

  componentDidMount() {
    this.setState({
      modal: Modal.getOrCreateInstance("#modal_buku"),
    });
  }

  Add = () => {
    this.state.modal.show();
    this.setState({
      isbn: Math.random().toString(),
      judul: "",
      penulis: "",
      penerbit: "",
      cover: "",
      action: "insert",
    });
  };

  Edit = (item) => {
    this.state.modal.show();
    this.setState({
      isbn: item.isbn,
      judul: item.judul,
      penulis: item.penulis,
      penerbit: item.penerbit,
      cover: item.cover,
      action: "update",
      selectedItem: item,
    });
  };

  Save = (event) => {
    event.preventDefault();
    let tempBuku = this.state.buku;

    if (this.state.action === "insert") {
      tempBuku.push({
        isbn: this.state.isbn,
        judul: this.state.judul,
        penulis: this.state.penulis,
        penerbit: this.state.penerbit,
        cover: this.state.cover,
      });
    } else if (this.state.action === "update") {
      let index = tempBuku.indexOf(this.state.selectedItem);

      if (index !== -1) {
        tempBuku[index] = {
          isbn: this.state.isbn,
          judul: this.state.judul,
          penulis: this.state.penulis,
          penerbit: this.state.penerbit,
          cover: this.state.cover,
        };
      }
    }
    this.setState({ buku: tempBuku });
    this.state.modal.hide();
  };

  Drop = (item) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
        let tempBuku = this.state.buku
        let index = tempBuku.indexOf(item)
        tempBuku.splice(index, 1)
        this.setState({buku: tempBuku})
    }
}

  searching = (event) => {
    if (event.keyCode === 13) {
      let keyword = this.state.keyword.toLowerCase();
      let tempBuku = this.state.buku;
      let result = tempBuku.filter((item) => {
        return (
          item.judul.toLowerCase().includes(keyword) ||
          item.penulis.toLowerCase().includes(keyword) ||
          item.penerbit.toLowerCase().includes(keyword)
        );
      });
      this.setState({ filterBuku: result });
    }
  };

  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Search"
          value={this.state.keyword}
          onChange={(ev) => this.setState({ keyword: ev.target.value })}
          onKeyUp={(ev) => this.searching(ev)}
        />

        <div className="row">
          {this.state.filterBuku.map((item, index) => (
            <Card
              key={index}
              judul={item.judul}
              penulis={item.penulis}
              penerbit={item.penerbit} 
              cover={item.cover}
              onEdit={() => this.Edit(item)}
              onDrop={() => this.Drop(item)}
            />
          ))}
        </div>

        <button className="btn btn-success" onClick={() => this.Add()}>
          Tambah Data
        </button>

        <div className="modal" id="modal_buku">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">Form Buku</div>

              <div className="modal-body">
                <form onSubmit={this.Save}>
                  Judul Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.judul}
                    onChange={(ev) => this.setState({ judul: ev.target.value })}
                    required
                  />
                  Penulis Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.penulis}
                    onChange={(ev) => this.setState({ penulis: ev.target.value })}
                    required
                  />
                  Penerbit Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.penerbit}
                    onChange={(ev) => this.setState({ penerbit: ev.target.value })}
                    required
                  />
                  Cover Buku
                  <input
                    type="url"
                    className="form-control mb-2"
                    value={this.state.cover}
                    onChange={(ev) => this.setState({ cover: ev.target.value })}
                    required
                  />
                  <button className="btn btn-info btn-block" type="submit">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
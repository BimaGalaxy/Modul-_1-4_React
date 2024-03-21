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
          judul: "Rumah ke rumah",
          penulis: "Pidhi Baiq",
          penerbit: "Gramedia",
          cover: "data:image/jpeg;base64,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",
        },
        {
          isbn: "123456",
          judul: "Kita ke sana",
          penulis: "Soekarno Putri",
          penerbit: "Gramedia",
          cover: "data:image/jpeg;base64,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",
        },
        {
          isbn: "1234567",
          judul: "Satu hari lagi",
          penulis: "Basalamah",
          penerbit: "Gramedia",
          cover: "data:image/jpeg;base64,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",
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
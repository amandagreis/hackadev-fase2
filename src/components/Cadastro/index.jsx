import "./styles.css";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";

function Cadastro() {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  };

  return (
    <>
      <div className="form">
        <form method="post" action="">
          <br />
          <h1>OCEAN CADASTRO</h1>
          <br />
          <br />
          <label>Nome:</label>
          <input type="text" size="40" placeholder="Nome Completo" />
          <label>CPF:</label>
          <InputMask
            type="text"
            id="cpf"
            required
            placeholder=""
            mask="999.999.999-99" maskChar=" " />
          <br />
          <br />
          <label>Email:</label>
          <input type="email" size="40" placeholder="Email Válido" required />
          <label>RG:</label>
          <input
            type="text"
            id="rg"
            minlength="11"
            maxlength="11"
            pattern="^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"
            required
            autocomplete="off"
            placeholder=""
          />
          <br />
          <br />
          <label>Telefone/Celular</label>
          <InputMask type="text" size="10" placeholder="DDD+Numero" mask="(99) 99999-9999" maskChar=" " />
          <label>Data de Nascimento:</label>
          <input type="date" name="data" id="data" />
          <br />
          <br />
          <label>Genero:</label> &nbsp;
          <div className="sexo">
            <input type="radio" name="opcao" id="op1" />Masculino<br />
            {/* &nbsp; */}
            <input type="radio" name="opcao" id="op2" />Feminino<br />
            {/* &nbsp; */}
            <input type="radio" name="opcao" id="op3" />Outros<br />
          </div>
          <br />
          <br />
          <h1>ENDEREÇO</h1>
          <br />
          <br />
          <label>Estado:</label>
          <input type="text" {...register("uf")} />
          <label>Cidade:</label>
          <input id="cidade" type="text" placeholder="" {...register("city")}/>
          <br />
          <br />
          <label>CEP:</label>
          <InputMask id="cep" type="text" placeholder="" mask="99.999-999" maskChar=" " {...register("cep")}
            onBlur={checkCEP}/>
          <label>Bairro:</label>
          <input id="bairro" type="text" placeholder="" {...register("neighborhood")}/>
          <br />
          <br />
          <label>Rua:</label>
          <input type="text" size="30" placeholder="Logradouro"  {...register("address")}/>
          <label>Número:</label>
          <input id="numero" type="text" minlength="5"
            maxlength="5" size="5" placeholder="" {...register("addressNumber")}/>
          <br />
          <br />
          <label>Complemento:</label>
          <input type="text" size="30" placeholder="Andar, Apartamento,Bloco" />
          <br />
          <br />
          <input type="submit" value="ENVIAR" /> &nbsp; &nbsp;
         
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default Cadastro;
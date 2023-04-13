async function checkForPlugin(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.error("Error fetching ChatGPT plugin:", error);
  }
  return false;
}

async function displayLogoIfPluginExists() {
  const url = new URL(window.location.href);
  const pluginUrl = `${url.origin}/.well-known/ai-plugin.json`;
  const pluginExists = await checkForPlugin(pluginUrl);

  if (pluginExists) {
    const logo = document.createElement("img");
    logo.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAIdQTFRFAAAAdKqcdKqcdKqcdKqcdKqcdKqcdKqcdKqcdKqcdKqcdKqcfa+in8S7udTNhbWodKqcoMW73Orm////5e/sqMrB7vTzjrqvdKqc9vr50+TgutXOy9/adKqcdKqcsc/Hl7+1lr+0wtrUfK+ijrquhbSo3ern5e/t1OXg7vXz9/r5dKqcdKqcGz2ZnwAAAC10Uk5TABBfr7/f/yCfj8+Q/////6D/////////YP////+wwP////////////////DQcfBklAAAAzJJREFUeJyll4lyozAMhqGHe3E0mEA52gRISNLu+z/f6rDBxs4mzWomMxz6kPVbsp0g0Bbe3T88igv2+HB/FwZLe3q+xM32/GSzL9ejaC8GGr7+jhXiNbydNegbWKCZfbuFFeKNdPa/i+IkSeL0HzRq/u57scokW74+C7+DWp7HqUbRivIcHQYf7sOyQqhumqYt4KI6F/wj+PSyVRPxzRo/lOOvjZeOn8GXA+fWUDdGAlvb8StweqGBuBPbmdlL2Vuej4ETGNLUSQ4tElWDEbc9JtBarks4rmF46jqpCNWvonoZ24ZJHuUQo9KyNcukhwfbM3CUc2YdXO8o2WwhEcTO/HCJbFEwjGELlXtXJ4P6PDwtvTCw1UZkDINXwlO9R9XgBRlcNz645yma4IQfk2pYJB0JIeXogVNwwBqyYVKtXpF29R4y8MO90sKESbUcRdtQ/GQYpDx4YCWUAXOJ5KxV1FOB9t7IMOpKWHCuktVa6T5tXXirZ3BWG56kJRJFp3wo9fVVMDcRiZXt2auRVpWch6fh1awVXa+lOdEajpycE+2ScOo8XGjvKlrC4sDTjHGKeAlTW+c79fGNAzdq3FTh2c6GYbyQeo13UGO5A6eTkNyXCxhri0WRdGvD1Kw7zr+halTPh9qG87mxjK46zOFSVLggDXC8FpzNC4IB0zppFUS2UwvgZfjI5acLYqPLM7siZ0xGNw+nTtXYR7ZgsdFXBoyfZK2oIKiVs3SptneehThJOejmydfZVN0WDPX57VaYEKPqaG6euRdNeFf5alvQRPeGVi0HGHpDbSzzUfjgEoLpJbY5lsZ3coZxWZaHyAvjuO29SHS5VKqhymijwVow9PSsJNi+NjZWWsNO9j5v7VXo0KqRiyExVcMFsl/Z41psdLQ59N0ghq7lPU+PEmr3JJYW/Fi3vTQtm/YlnCL3aLI8VmxPMzt7Izs6rHAPNKsWe3Ocly3O/jtaOgLsOUqRrUnpFo6BpPnJdxrzHuKcBOTRExdg//GRbHNQ6Lj1O5w9uJKlKzgGrrxRGb71yMxw+Oc/4CD8uex3Fr45tvqLclve058y9/R7PQzRPz6/fpn8XxXRkgqCTcxFAAAAAElFTkSuQmCC";
    logo.alt = "OpenAI Logo";
    logo.style.position = "fixed";
    logo.style.width = "60px";
    logo.style.height = "60px";
    logo.style.bottom = "20px";
    logo.style.right = "20px";
    logo.style.zIndex = 100000;
    logo.style.opacity = "0.5";

    const link = document.createElement("a");
    link.href = pluginUrl;
    link.title = "Press to see the ai-plugin.json file";
    link.target = "_blank";
    link.appendChild(logo);

    document.body.appendChild(link);
  }
}

displayLogoIfPluginExists();

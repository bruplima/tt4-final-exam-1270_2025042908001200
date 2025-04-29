# Etapa 1: build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

# Copiar o projeto inteiro
COPY ./RecipeManagerAPI/ ./RecipeManagerAPI/

# Ir para a pasta do projeto
WORKDIR /src/RecipeManagerAPI

# Restaurar dependências
RUN dotnet restore

# Publicar a aplicação
RUN dotnet publish -c Release -o /app/publish

# Etapa 2: runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0

WORKDIR /app

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "RecipeManagerAPI.dll"]

#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DotNetWithVue.Server/DotNetWithVue.Server.csproj", "DotNetWithVue.Server/"]
RUN dotnet restore "DotNetWithVue.Server/DotNetWithVue.Server.csproj"
COPY . .
WORKDIR "/src/DotNetWithVue.Server"
RUN dotnet build "DotNetWithVue.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DotNetWithVue.Server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DotNetWithVue.Server.dll"]